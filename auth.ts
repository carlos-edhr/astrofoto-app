import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getUserById } from "./data/user";
import { Stream, UserRole } from "@prisma/client";
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation";
import { getAccountByUserId } from "./data/account";
import authConfig from "./auth.config";
import { getStreamByUserId } from "./data/stream";
// import { generateUsername, generateFromEmail } from "unique-username-generator";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    // Create stream related to user and username
    // createUser: async ({ user }) => {
    //   const email = user.email || "";
    //   const username = generateFromEmail(email, 3);

    //   await db.user.update({
    //     where: { email },
    //     data: {
    //       username: username,
    //       stream: {
    //         create: {
    //           name: `${username}'s stream`,
    //         },
    //       },
    //     },
    //   });
    // },
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      //Alow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id as string);

      //Prevent sign in without email verification
      if (!existingUser?.emailVerified) {
        return false;
      }
      //TODO ADD 2FA check
      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id,
        );

        if (!twoFactorConfirmation) return false;

        // Delete two factor confirmation for next sign in
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }
      // console.log("Existing user: >>>> ", existingUser);
      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email as string;
        session.user.isOAuth = token.isOAuth as boolean;
      }

      if (token.username) {
        session.user.username = token.username as string;
      }

      if (token.stream) {
        session.user.stream = token.stream as Stream;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token;
      }

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      const existingStream = await getStreamByUserId(existingUser.id);

      token.isOauth = !!existingAccount;
      // token.id = existingUser.id;
      token.name = existingUser.name;
      token.username = existingUser.username;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      token.stream = existingStream;

      // console.log("EXISTING Token ->>>>> ", token);

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
