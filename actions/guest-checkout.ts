"use server";

import { stripe } from "@/lib/stripe";

export const createGuestCheckoutSession = async ({
  plan,
  guestName,
  guestEmail,
  guestPhone,
  price,
}: {
  plan: string; // Plan enum value
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  price: number;
}) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "mxn",
          product_data: {
            name: `Inscripción CIAF VIII - ${plan} PASS`,
            description: `Plan: ${plan} - ${guestName}`,
          },
          unit_amount: price * 100, // Convert to cents
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
    metadata: {
      plan,
      guestName,
      guestEmail,
      guestPhone,
      price: price.toString(), // Store as string for metadata
    },
  });

  return session.url || `${process.env.NEXTAUTH_URL}/error`;
};
