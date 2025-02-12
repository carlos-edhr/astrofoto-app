import { UserRole } from "@prisma/client";
import { type DefaultSession } from "next-auth";
import { Stream } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  username: string;
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  stream: Stream;
  bio: string;
  email: string;
  id: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
