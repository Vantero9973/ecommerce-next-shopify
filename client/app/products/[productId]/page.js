import Stripe from "stripe";
import { notFound } from "next/navigation";
import Product from "./Product";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function fetchProduct(productId) {
  try {
    const product = await stripe.products.retrieve(productId, {
      expand: ["default_price"],
    });

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

async function fetchTrendingProducts(excludeProductId) {
  try {
    const products = await stripe.products.list({
      limit: 50,
      active: true,
      expand: ["data.default_price"],
    });

    const trendingProducts = products.data.filter(
      (product) => product.metadata.trending === "true"
    );

    const filteredProducts = trendingProducts.filter(
      (product) => product.id !== excludeProductId
    );

    const randomProducts = filteredProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    return randomProducts;
  } catch (error) {
    console.error("Error fetching trending products:", error);
    return [];
  }
}

export default async function ProductPage({ params }) {
  const { productId } = params;

  const product = await fetchProduct(productId);
  const relatedProducts = await fetchTrendingProducts(productId);

  if (!product) {
    return notFound();
  }

  const price = product.default_price?.unit_amount
    ? (product.default_price.unit_amount / 100).toFixed(2)
    : "N/A";

  return (
    <Product
      product={product}
      relatedProducts={relatedProducts}
      price={price}
    />
  );
}
