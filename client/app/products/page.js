import Stripe from "stripe";
import FilteredProducts from "./FilteredProducts";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function Products() {
  const products = await stripe.products.list({
    limit: 50,
    active: true,
    expand: ["data.default_price"],
  });

  const trendingProducts = products.data.filter(
    (product) => product.metadata.trending === "true"
  );
  const nonTrendingProducts = products.data.filter(
    (product) => product.metadata.trending !== "true"
  );

  trendingProducts.sort((a, b) => a.name.localeCompare(b.name));
  nonTrendingProducts.sort((a, b) => a.name.localeCompare(b.name));

  const sortedProducts = [...trendingProducts, ...nonTrendingProducts];

  return <FilteredProducts sortedProducts={sortedProducts} />;
}
