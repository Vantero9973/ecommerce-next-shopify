import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import hero from "../media/hero.jpg";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const callouts = [
  {
    name: "Aggressive",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Moderate",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Neutral",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default async function Home() {
  const products = await stripe.products.list({
    limit: 50,
    active: true,
    expand: ["data.default_price"],
  });

  const trending = products.data.filter(
    (product) => product.metadata.trending === "true"
  );

  const trendingProducts = trending
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 4);

  return (
    <div className="bg-gray-50">
      <main>
        <div className="relative bg-gray-900">
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <Image
              src={hero}
              alt="bouldering hero"
              placeholder="blur"
              className="h-full w-full object-cover object-[20%_center] sm:object-[70%_center]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 opacity-40 xl:opacity-25"
          />

          <div className="relative mx-auto flex max-w-7xl flex-col items-start px-16 xl:px-8 py-32 text-left sm:py-72">
            <div className="mb-4">
              <h1 className="text-5xl font-semibold text-white lg:text-6xl max-w-lg">
                ELEVATE YOUR PERFORMANCE
              </h1>
              <p className="mt-2 font-semibold text-base lg:text-[17px] tracking-tight leading-7 text-white max-w-sm lg:max-w-md">
                DISCOVER THE PERFECT FIT TO CONQUER EVERY ROUTE AND PROBLEM
                AHEAD
              </p>
            </div>
            <div className="border-t-2 border-sky-500">
              <Link
                href="/products"
                className="mt-4 inline-block rounded-md border border-transparent bg-zinc-800 px-6 py-2 text-base font-bold text-white hover:bg-zinc-700"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              alt=""
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
              width={500}
              height={300}
              placeholder="empty"
              className="!h-full !w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 bg-opacity-50"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Long-term thinking
            </h2>
            <p className="mt-3 text-xl text-white">
              We're committed to responsible, sustainable, and ethical
              manufacturing. Our small-scale approach allows us to focus on
              quality and reduce our impact. We're doing our best to delay the
              inevitable heat-death of the universe.
            </p>
            <a
              href="#"
              className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
            >
              Read our story
            </a>
          </div>
        </div>

        <section aria-labelledby="trending-heading">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
            <div className="md:flex md:items-center md:justify-between">
              <h2
                id="favorites-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Trending Products
              </h2>
              <Link
                href="/products/trending"
                className="hidden text-sm font-medium text-sky-600 hover:text-sky-500 md:block"
              >
                Shop the collection
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
              {trendingProducts.map((product) => {
                const price = product.default_price?.unit_amount
                  ? (product.default_price.unit_amount / 100).toFixed(2)
                  : "N/A";
                return (
                  <div
                    key={product.id}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 divide-y divide-gray-200 bg-white"
                  >
                    <div className="aspect-h-4 aspect-w-3 bg-white shadow sm:aspect-none group-hover:opacity-75 sm:h-96">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={500}
                        height={300}
                        placeholder="empty"
                        className="!h-full !w-full object-contain object-center sm:h-full sm:w-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col space-y-2 p-4">
                      <p className="text-sm font-semibold text-gray-700">
                        {product.metadata.brand}
                      </p>
                      <h3 className="text-[15px] text-gray-900">
                        <Link href={`/products/${product.id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">
                        {product.description.length > 100
                          ? `${product.description.slice(0, 100)}...`
                          : product.description}
                      </p>
                      <div className="flex flex-1 flex-col justify-end">
                        <p className="mt-1 text-sm text-gray-900">${price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-sm md:hidden">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Shop the collection
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        <div className="overflow-hidden pt-32 sm:pt-14">
          <div className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative pb-16 pt-48 sm:pb-24">
                <div>
                  <h2
                    id="sale-heading"
                    className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                  >
                    Final Stock.
                    <br />
                    Up to 50% off.
                  </h2>
                  <div className="mt-6 text-base">
                    <a href="#" className="font-semibold text-white">
                      Shop the sale
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>

                <div className="absolute -top-32 left-1/2 min-w-max -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                  <div className="ml-24 flex space-x-6 sm:ml-3 lg:space-x-8">
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <Image
                          alt=""
                          src={hero}
                          placeholder="blur"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          alt=""
                          src={hero}
                          placeholder="blur"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <Image
                          alt=""
                          src={hero}
                          placeholder="blur"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          alt=""
                          src={hero}
                          placeholder="blur"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <Image
                          alt=""
                          src={hero}
                          placeholder="blur"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          alt=""
                          src={hero}
                          placeholder="blur"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
