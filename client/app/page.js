import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import hero from "../media/hero.jpg";
import aggressive from "../media/aggressive.jpg";
import moderate from "../media/moderate.jpeg";
import neutral from "../media/neutral.png";
import banner from "../media/banner.jpg";
import one from "../media/collage-one.jpeg";
import two from "../media/collage-two.jpg";
import three from "../media/collage-three.webp";
import four from "../media/collage-four.jpg";
import five from "../media/collage-five.jpg";
import six from "../media/collage-six.jpg";
import { StarIcon } from "@heroicons/react/20/solid";
import { FaUndoAlt, FaTruck, FaTags, FaLeaf } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    title: "Incredible quality and service",
    rating: 5,
    content: `
      <p>The shoes are even better than I imagined. Super comfortable, and the grip is fantastic for outdoor climbing.</p>
      <p>Delivery was fast, and the packaging was perfect. Would definitely recommend to anyone looking for quality climbing gear!</p>
    `,
    author: "Jordan S",
    date: "June 21, 2023",
    datetime: "2023-06-21",
  },
  {
    id: 2,
    title: "Perfect for my climbing needs",
    rating: 5,
    content: `
      <p>I’ve used these shoes for both indoor and outdoor climbing, and they’ve exceeded my expectations in every way.</p>
    `,
    author: "Ashley R",
    date: "April 11, 2023",
    datetime: "2023-04-11",
  },
  {
    id: 3,
    title: "Solid shoes but sizing was tricky",
    rating: 4,
    content: `
      <p>The quality is excellent, but the sizing was a little off for me. Took some time to break them in, but overall a solid purchase.</p>
    `,
    author: "Chris P",
    date: "March 3, 2023",
    datetime: "2023-03-03",
  },
  {
    id: 4,
    title: "Amazing product and fast shipping",
    rating: 5,
    content: `
      <p>Super fast shipping! The shoes are top-notch quality, and I couldn’t be happier with my purchase. Can’t wait to use them on my next climbing trip.</p>
    `,
    author: "Megan T",
    date: "July 15, 2023",
    datetime: "2023-07-15",
  },
];

const perks = [
  {
    name: "Free & Easy Returns",
    icon: FaUndoAlt,
    description:
      "Changed your mind? No worries! Send it back to us hassle-free with our pre-paid return label.",
  },
  {
    name: "Same-Day Delivery",
    icon: FaTruck,
    description:
      "Order today and get your new climbing shoes delivered right to your door in just a few hours. No waiting!",
  },
  {
    name: "Exclusive Discounts",
    icon: FaTags,
    description:
      'Enjoy special discounts all year long. Use code "ALLYEAR" at checkout to save on every order, any time.',
  },
  {
    name: "Eco-Friendly Commitment",
    icon: FaLeaf,
    description:
      "We're dedicated to giving back to the planet. 1% of every purchase helps support environmental conservation.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
              priority={true}
              className="h-full w-full object-cover object-[20%_center] sm:object-[70%_center]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 opacity-40 xl:opacity-25"
          />

          <div className="relative mx-auto flex max-w-7xl flex-col items-start px-16 xl:px-8 py-32 text-left sm:py-72">
            <div className="mb-4">
              <h1 className="text-shadow text-4xl font-semibold text-white lg:text-6xl max-w-lg max-lg:text-center">
                ELEVATE YOUR PERFORMANCE
              </h1>
              <p className="text-shadow mt-2 font-semibold text-sm lg:text-[17px] tracking-tight leading-7 text-white max-w-sm lg:max-w-md max-lg:text-center">
                DISCOVER THE PERFECT FIT TO CONQUER EVERY ROUTE AND PROBLEM
                AHEAD
              </p>
            </div>
            <div className="max-lg:mx-auto border-t-2 border-sky-500">
              <Link
                href="/products"
                className="mt-4 inline-block rounded-md border border-transparent bg-zinc-800 px-6 py-2 text-base font-bold text-white hover:bg-zinc-700"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Shop by Category
            </h2>
            <Link
              href="/products"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              Shop all
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
              <Image
                alt="Aggressive climbing shoes on a steep overhang, ideal for advanced bouldering and sport climbs."
                src={aggressive}
                placeholder="blur"
                className="object-cover object-center group-hover:opacity-75"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50"
              />
              <div className="flex items-end p-6">
                <div>
                  <h3 className="font-semibold text-white">
                    <Link href="/products/aggressive">
                      <span className="absolute inset-0" />
                      Aggressive Profile
                    </Link>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </div>

            <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <Image
                alt="Moderate climbing shoes on a crack climb, combining comfort and grip for trad routes."
                src={moderate}
                placeholder="blur"
                className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white">
                    <Link href="/products/moderate">
                      <span className="absolute inset-0" />
                      Moderate Profile
                    </Link>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </div>

            <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <Image
                alt="Neutral climbing shoes on a slab route, great for beginners and easy climbs."
                src={neutral}
                placeholder="blur"
                className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white">
                    <Link href="/products/neutral">
                      <span className="absolute inset-0" />
                      Neutral Profile
                    </Link>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href="/products"
              className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Shop all
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>

        <div className="relative bg-gray-800 px-6 py-32 sm:px-12 lg:px-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              alt="Rock climber scaling a cliff face"
              src={banner}
              placeholder="blur"
              className="h-full w-full object-cover object-left"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-shadow text-3xl font-bold tracking-tight text-white sm:text-4xl">
              UNLEASH YOUR POTENTIAL
            </h2>
            <p className="text-shadow mt-3 lg:text-xl text-white">
              Discover high-performance climbing shoes designed for precision,
              comfort, and durability. Whether you're tackling steep overhangs
              or cruising multi-pitch routes, we have the perfect fit to help
              you conquer every climb.
            </p>
            <div className="mt-4 border-t-2 border-sky-500">
              <Link
                href="/products"
                className="mt-4 inline-block rounded-md border border-transparent bg-zinc-800 px-6 py-2 text-base font-bold text-white hover:bg-zinc-700"
              >
                SHOP NOW
              </Link>
            </div>
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
              <Link
                href="/products/trending"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Shop the collection
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="perks-heading"
          className="border-t border-gray-200 bg-gray-800"
        >
          <h2 id="perks-heading" className="sr-only">
            Our perks
          </h2>

          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <perk.icon className="m-auto h-10 w-auto text-gray-100" />
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-semibold text-gray-100">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-300">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Recent reviews
          </h2>
          <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                  <div className="flex items-center xl:col-span-1">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            review.rating > rating
                              ? "text-yellow-400"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      {review.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                  </div>

                  <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                    <h3 className="text-sm font-medium text-gray-900">
                      {review.title}
                    </h3>

                    <div
                      dangerouslySetInnerHTML={{ __html: review.content }}
                      className="mt-3 space-y-6 text-sm text-gray-500"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                  <p className="font-medium text-gray-900">{review.author}</p>
                  <time
                    dateTime={review.datetime}
                    className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                  >
                    {review.date}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden pt-32 sm:pt-14">
          <div className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative pb-16 pt-48 sm:pb-24">
                <div>
                  <h2
                    id="product-heading"
                    className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                  >
                    Explore Our Collection.
                    <br />
                    Gear for Every Climber.
                  </h2>
                  <div className="mt-6 text-base">
                    <Link
                      href="/products"
                      className="font-semibold text-gray-200 hover:text-white"
                    >
                      Shop All
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>

                <div className="absolute -top-32 left-1/2 min-w-max -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                  <div className="ml-24 flex space-x-6 sm:ml-3 lg:space-x-8">
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <Image
                          alt=""
                          src={one}
                          placeholder="blur"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          alt=""
                          src={two}
                          placeholder="blur"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <Image
                          alt=""
                          src={three}
                          placeholder="blur"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          alt=""
                          src={four}
                          placeholder="blur"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <Image
                          alt=""
                          src={five}
                          placeholder="blur"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          alt=""
                          src={six}
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
