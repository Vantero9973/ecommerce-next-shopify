import Stripe from "stripe";
import ModerateProducts from "./ModerateProducts";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function Products() {
  const products = await stripe.products.list({
    limit: 50,
    active: true,
    expand: ["data.default_price"],
  });

  const filteredProducts = products.data.filter(
    (product) => product.metadata.moderate === "true"
  );

  const moderateProducts = filteredProducts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return <ModerateProducts moderateProducts={moderateProducts} />;
}
