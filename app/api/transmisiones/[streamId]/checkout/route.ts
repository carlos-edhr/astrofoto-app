import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { currentUser } from "@/lib/auth";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(
  req: Request,
  { params }: { params: { streamId: string } },
) {
  try {
    const user = await currentUser();

    if (!user || !user.id || !user.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const stream = await db.stream.findUnique({
      where: {
        id: params.streamId,
        isFree: false,
      },
    });

    const purchase = await db.purchase.findUnique({
      where: {
        userId_streamId: {
          userId: user.id,
          streamId: params.streamId,
        },
      },
    });

    if (purchase) {
      return new NextResponse("Already purchased", { status: 400 });
    }

    if (!stream) {
      return new NextResponse("Not Found");
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        quantity: 1,
        price_data: {
          currency: "MXN",
          product_data: {
            name: stream.name,
            // description: course.description!,
          },
          unit_amount: Math.round(stream.price! * 100),
        },
      },
    ];

    let stripeCustomer = await db.stripeCustomer.findUnique({
      where: {
        userId: user.id,
      },
      select: {
        stripeCustomerId: true,
      },
    });

    if (!stripeCustomer) {
      const customer = await stripe.customers.create({
        email: user.email,
      });

      stripeCustomer = await db.stripeCustomer.create({
        data: {
          userId: user.id,
          stripeCustomerId: customer.id,
        },
      });
    }

    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomer.stripeCustomerId,
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/transmisiones?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/transmisiones?canceled=1`,
      metadata: {
        streamId: params.streamId,
        userId: user.id,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log("[STREAM_ID_CHECKOUT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
