import Stripe from "stripe";
import AggressiveProducts from "./AggressiveProducts";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function Products() {
  const products = await stripe.products.list({
    limit: 50,
    active: true,
    expand: ["data.default_price"],
  });

  const filteredProducts = products.data.filter(
    (product) => product.metadata.aggressive === "true"
  );

  const aggressiveProducts = filteredProducts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return <AggressiveProducts aggressiveProducts={aggressiveProducts} />;
}
