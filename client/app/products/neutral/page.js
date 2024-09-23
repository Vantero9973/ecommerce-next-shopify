import Stripe from "stripe";
import NeutralProducts from "./NeutralProducts";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function Products() {
  const products = await stripe.products.list({
    limit: 50,
    active: true,
    expand: ["data.default_price"],
  });

  const filteredProducts = products.data.filter(
    (product) => product.metadata.neutral === "true"
  );

  const neutralProducts = filteredProducts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return <NeutralProducts neutralProducts={neutralProducts} />;
}
