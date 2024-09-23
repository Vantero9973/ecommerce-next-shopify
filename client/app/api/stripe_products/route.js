import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
  try {
    const products = await stripe.products.list({
      expand: ["data.default_price"],
      limit: 100,
    });

    return new Response(JSON.stringify(products.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching products" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
