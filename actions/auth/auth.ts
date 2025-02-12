"use server";

import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { authenticate } from "@/lib/auth";

export async function signUp(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    if (password.length < 8) {
      return { message: "Password must be at least 8 characters" };
    }

    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return { message: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        username: name,
      },
    });

    // Sign in after registration
    await authenticate(undefined, formData);

    return { success: true, message: "Account created successfully!" };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Registration failed",
    };
  }
}

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn({
//       email: formData.get("email") as string,
//       password: formData.get("password") as string,
//     });
//   } catch (error) {
//     if (error instanceof Error) {
//       return error.message;
//     }
//     return "An unknown error occurred";
//   }

//   redirect("/transmisiones");
// }
