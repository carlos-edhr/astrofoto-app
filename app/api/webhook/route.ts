import { getStreamById } from "@/data/stream";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";
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
  const userId = session?.metadata?.userId;
  const streamId = session?.metadata?.streamId;

  if (event.type === "checkout.session.completed") {
    if (!userId || !streamId) {
      return new NextResponse(`Webhook Error: Missing Metadata`, {
        status: 400,
      });
    }

    //Create purchase
    const purchase = await db.purchase.create({
      data: {
        streamId: streamId,
        userId: userId,
      },
    });

    //get stream by id
    const stream = await getStreamById(streamId);
    //get user by id
    const user = await getUserById(userId);

    // console.log("Stream -->", stream);
    // console.log("User -->", user);
    // console.log("Purchase -->", purchase);
    //send Email to Admin
    await sendPurchaseConfirmationEmailToAdmin(
      stream?.name ?? "Unknown Stream",
      purchase.id,
      user?.username ?? "Username not set",
      user?.email ?? "Email not set",
      stream?.price ?? 0,
    );

    // try {
    //   // Send email to user
    // } catch (error: any) {
    //   return new NextResponse(
    //     `Webhook Error: Unable to send purchase confirmation admin Email: ${error}`,
    //     { status: 500 },
    //   );
    // }
  } else {
    return new NextResponse(
      `Webhook Error: Unhandled event type ${event.type}`,
      { status: 200 },
    );
  }

  return new NextResponse(null, { status: 200 });
}
