import Image from "next/image";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function AggressiveProductsPage() {
  // Fetch product list from Stripe
  const products = await stripe.products.list({
    expand: ["data.default_price"], // Optionally, expand price information
  });

  // Filter products where the metadata key 'aggressive' is equal to 'true'
  const aggressiveProducts = products.data.filter(
    (product) => product.metadata.aggressive === "true"
  );

  const trendingProducts = products.data.filter(
    (product) => product.metadata.trending === "true"
  );

  // JSX to display the aggressive product list
  return (
    <div>
      <div>
        <h1>Aggressive Products Collection</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {aggressiveProducts.length > 0 ? (
            aggressiveProducts.map((product) => {
              // Get price if available
              const price = product.default_price?.unit_amount
                ? (product.default_price.unit_amount / 100).toFixed(2)
                : "N/A";

              return (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid #eaeaea",
                    padding: "16px",
                    borderRadius: "8px",
                    maxWidth: "300px",
                  }}
                >
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>

                  {/* Display image if available */}
                  {product.images.length > 0 && (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={500}
                      height={300}
                      placeholder="empty"
                      style={{
                        width: "100% !important",
                        height: "auto !important",
                        borderRadius: "8px",
                      }}
                    />
                  )}

                  {/* Display product metadata */}
                  <p>
                    <strong>Category: </strong>Aggressive
                  </p>

                  {/* Display price */}
                  <p>
                    <strong>Price: </strong>${price}
                  </p>
                </div>
              );
            })
          ) : (
            <p>No aggressive products available.</p>
          )}
        </div>
      </div>

      <div>
        <h1>Trending Products Collection</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {trendingProducts.length > 0 ? (
            trendingProducts.map((product) => {
              // Get price if available
              const price = product.default_price?.unit_amount
                ? (product.default_price.unit_amount / 100).toFixed(2)
                : "N/A";

              return (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid #eaeaea",
                    padding: "16px",
                    borderRadius: "8px",
                    maxWidth: "300px",
                  }}
                >
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>

                  {/* Display image if available */}
                  {product.images.length > 0 && (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={500}
                      height={300}
                      placeholder="empty"
                      style={{
                        width: "100% !important",
                        height: "auto !important",
                        borderRadius: "8px",
                      }}
                    />
                  )}

                  {/* Display product metadata */}
                  <p>
                    <strong>Category: </strong>Trending
                  </p>

                  {/* Display price */}
                  <p>
                    <strong>Price: </strong>${price}
                  </p>
                </div>
              );
            })
          ) : (
            <p>No trending products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
