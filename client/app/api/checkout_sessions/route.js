const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const origin = req.headers.get("origin");

    const products = await stripe.products.list();

    const productId = products.data[0].id;

    const prices = await stripe.prices.list({
      product: productId,
    });

    const priceId = prices.data[0].id;

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return new Response(
      JSON.stringify({ clientSecret: session.client_secret }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: err.statusCode || 500,
    });
  }
}
