import { ConfirmRegisterEmail } from "@/components/auth/confirm-register-email-template";
import { PasswordResetEmail } from "@/components/auth/reset-password-email-template";
import { TwoFactorAuthenticationEmail } from "@/components/auth/two-factor-authentication-email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (
  name: string,
  email: string,
  token: string,
) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Authentication Code",
    react: TwoFactorAuthenticationEmail({ username: name, email, token }),
  });
};

// Reset Password Email
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "Reset your password",
    react: PasswordResetEmail({ resetLink: resetLink }),
  });
};
// Confirm Registration Email
export const sendVerificationEmail = async (
  name: string,
  email: string,
  token: string,
) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "Welcome! Confirm your email",
    react: ConfirmRegisterEmail({ name: name, confirmLink: confirmLink }),
    // html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};
