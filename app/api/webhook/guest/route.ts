import { db } from "@/lib/db";
// import { sendGuestPurchaseConfirmationEmail } from "@/lib/mail"; // Implement this
import { sendPurchaseConfirmationEmailToAdmin } from "@/lib/mail";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    const guestEmail = session.metadata?.guestEmail;
    const guestName = session.metadata?.guestName;
    const plan = session.metadata?.plan;
    const guestPhone = session.metadata?.guestPhone || "";
    const price = parseFloat(session.metadata?.price || "0");

    if (!guestEmail || !plan || !guestName) {
      return new NextResponse(`Webhook Error: Missing Metadata`, {
        status: 400,
      });
    }

    // Create guest purchase record
    const guestPurchase = await db.guestPurchase.create({
      data: {
        plan: plan as any, // Will be validated by Prisma
        guestEmail,
        guestName,
        phoneNumber: guestPhone,
        paymentTotal: price,
      },
    });

    // Send confirmation to guest
    // await sendGuestPurchaseConfirmationEmail(
    //   guestEmail,
    //   guestName,
    //   plan,
    //   guestPurchase.id,
    //   price,
    // );

    // Send notification to admin
    await sendPurchaseConfirmationEmailToAdmin(
      plan,
      guestPurchase.id,
      guestName,
      guestEmail,
      price,
    );
  } else {
    return new NextResponse(
      `Webhook Error: Unhandled event type ${event.type}`,
      { status: 200 },
    );
  }

  return new NextResponse(null, { status: 200 });
}
