import { ConfirmRegisterEmail } from "@/components/auth/confirm-register-email-template";
import { PurchaseConfirmationEmailToAdmin } from "@/components/auth/purchase-confirmation-email-to-admin";
import { PurchaseConfirmationEmailToUser } from "@/components/auth/purchase-confirmation-email-to-user";
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
    from: "onboarding@congresodeastrofotografia.com",
    to: email,
    subject: "Authentication Code",
    react: TwoFactorAuthenticationEmail({ username: name, email, token }),
  });
};

// Reset Password Email
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "Congreso de Astrofotografía <onboarding@congresodeastrofotografia.com>",
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
    from: "Congreso de Astrofotografía <onboarding@congresodeastrofotografia.com>",
    to: [email],
    subject: "Welcome! Confirm your email",
    react: ConfirmRegisterEmail({ name: name, confirmLink: confirmLink }),
    // html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};

//Confirm Purchase to Admin Email
export const sendPurchaseConfirmationEmailToAdmin = async (
  streamName: string,
  purchaseId: string,
  username: string,
  userEmail: string,
  purchaseAmount: number,
) => {
  const adminEmail = [
    "carlos.edhr@protonmail.com",
    //  "caneck.leyva@gmail.com" <--- PENDING PRODUCTION READY DEPLOYMENT --->
  ];

  await resend.emails.send({
    from: "Congreso de Astrofotografía <ventas@congresodeastrofotografia.com>",
    to: [...adminEmail],
    subject: "Automated Purchase Confirmation",
    react: PurchaseConfirmationEmailToAdmin({
      streamName: streamName,
      purchaseId: purchaseId,
      username: username,
      userEmail: userEmail,
      purchaseAmount: purchaseAmount,
    }),
  });
};
//Confirm Purchase to User Email
export const sendPurchaseConfirmationEmailToUser = async (
  streamName: string,
  purchaseId: string,
  username: string,
  userEmail: string,
  purchaseAmount: number,
) => {
  const adminEmail = [
    userEmail,
    // "caneck.leyva@gmail.com" <--- PENDING PRODUCTION READY DEPLOYMENT --->
  ];

  await resend.emails.send({
    from: "Congreso de Astrofotografía <ventas@congresodeastrofotografia.com>",
    to: [...adminEmail],
    subject: "¡Gracias por tu compra!",
    react: PurchaseConfirmationEmailToUser({
      streamName: streamName,
      purchaseId: purchaseId,
      username: username,
      purchaseAmount: purchaseAmount,
    }),
    // attachments: [
    //   {
    //     filename: "/brand/CIAF8-Logo1.png", // Logo attachment
    //   },
    // ],
  });
};
