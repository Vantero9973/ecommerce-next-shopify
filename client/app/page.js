import Image from "next/image";
import Link from "next/link";
import hero from "../media/hero.jpg";
import { reviews } from "../data/reviews";
import { StarIcon } from "@heroicons/react/20/solid";

const collections = [
  {
    name: "Performance Collection",
    href: "#",
    imageSrc:
      "https://www.psychi.co.uk/cdn/shop/articles/climbing-shoes-guide-bouldering-rock-climbing.jpg?v=1670938331&width=1080",
    imageAlt:
      "High-performance climbing shoes designed for technical routes and precision footwork.",
  },
  {
    name: "Comfort Collection",
    href: "#",
    imageSrc:
      "https://www.climbinganchors.com.au/assets/alt_5/BUTORAKOMETLR.jpg?20230503151516",
    imageAlt:
      "Comfortable climbing shoes ideal for long multi-pitch climbs and all-day wear.",
  },
  {
    name: "All-Rounder Collection",
    href: "#",
    imageSrc:
      "https://inspirerock.com/wp-content/uploads/2024/05/rock-climbing-shoes-1024x768.png",
    imageAlt:
      "Versatile climbing shoes suitable for both indoor and outdoor climbing across various styles.",
  },
];

const trendingProducts = [
  {
    id: 1,
    name: "Solution",
    color: "La Sportiva",
    price: "$185",
    href: "#",
    imageSrc:
      "https://dawfo2ydqeykk.cloudfront.net/catalog/product/cache/a94c62ccd2a56b9e4465c29308d3f830/2/0/20g_000100_2.jpg",
    imageAlt: "La Sportiva Solution climbing shoe, aggressive design.",
  },
  {
    id: 2,
    name: "Instinct VS",
    color: "Scarpa",
    price: "$209",
    href: "#",
    imageSrc:
      "https://dawfo2ydqeykk.cloudfront.net/catalog/product/cache/a94c62ccd2a56b9e4465c29308d3f830/5/e/5e6ea94ebe7ea07c3c8b46a7.jpg",
    imageAlt: "Scarpa Instinct VS climbing shoe, ideal for bouldering.",
  },
  {
    id: 3,
    name: "Tarantulace",
    color: "La Sportiva",
    price: "$89",
    href: "#",
    imageSrc:
      "https://dawfo2ydqeykk.cloudfront.net/catalog/product/cache/a94c62ccd2a56b9e4465c29308d3f830/3/0/30l_719206.jpg",
    imageAlt: "La Sportiva Tarantulace climbing shoe, entry-level model.",
  },
  {
    id: 4,
    name: "Drago",
    color: "Scarpa",
    price: "$209",
    href: "#",
    imageSrc:
      "https://www.bfgcdn.com/1500_1500_90/301-0352/scarpa-drago-climbing-shoes-detail-2.jpg",
    imageAlt: "Scarpa Drago climbing shoe, high-performance bouldering shoe.",
  },
];

const perks = [
  {
    name: "Free returns",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
  },
  {
    name: "Same day delivery",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg",
    description:
      "We offer a delivery service that has never been done before. Checkout today and receive your products within hours.",
  },
  {
    name: "All year discount",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: "For the planet",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden sm:flex sm:flex-col"
          >
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  alt="Outdoor bouldering hero"
                  src={hero}
                  placeholder="blur"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
          </div>

          <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
            {/* Background image and overlap */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex flex-col sm:hidden"
            >
              <div className="relative w-full flex-1 bg-gray-800">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    alt=""
                    src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gray-900 opacity-50" />
              </div>
              <div className="h-48 w-full bg-white" />
            </div>
            <div className="relative py-32">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Mid-Season Sale
              </h1>
              <div className="mt-4 sm:mt-6">
                <Link
                  href="/products"
                  className="inline-block rounded-md border border-transparent bg-sky-600 px-8 py-3 font-medium text-white hover:bg-sky-500"
                >
                  See all
                </Link>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="collection-heading"
            className="relative -mt-96 sm:mt-0"
          >
            <h2 id="collection-heading" className="sr-only">
              Collections
            </h2>
            <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
              {collections.map((collection) => (
                <div
                  key={collection.name}
                  className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto"
                >
                  <div>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 overflow-hidden rounded-lg"
                    >
                      <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                        <img
                          alt={collection.imageAlt}
                          src={collection.imageSrc}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                    </div>
                    <div className="absolute inset-0 flex items-end rounded-lg p-6">
                      <div>
                        <p aria-hidden="true" className="text-sm text-white">
                          Shop the collection
                        </p>
                        <h3 className="mt-1 font-semibold text-white">
                          <a href={collection.href}>
                            <span className="absolute inset-0" />
                            {collection.name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
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
              <a
                href="#"
                className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
              >
                Shop the collection
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
              {trendingProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    <a href={product.href}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              ))}
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
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <img
                          alt=""
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
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

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customer Reviews
            </h2>

            <div className="mt-3 flex items-center">
              <div>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
              </div>
              <p className="ml-2 text-sm text-gray-900">
                Based on {reviews.totalCount} reviews
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

              <dl className="space-y-3">
                {reviews.counts.map((count) => (
                  <div key={count.rating} className="flex items-center text-sm">
                    <dt className="flex flex-1 items-center">
                      <p className="w-3 font-medium text-gray-900">
                        {count.rating}
                        <span className="sr-only"> star reviews</span>
                      </p>
                      <div
                        aria-hidden="true"
                        className="ml-1 flex flex-1 items-center"
                      >
                        <StarIcon
                          aria-hidden="true"
                          className={classNames(
                            count.count > 0
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                        />

                        <div className="relative ml-3 flex-1">
                          <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                          {count.count > 0 ? (
                            <div
                              style={{
                                width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                              }}
                              className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                            />
                          ) : null}
                        </div>
                      </div>
                    </dt>
                    <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                      {Math.round((count.count / reviews.totalCount) * 100)}%
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">
                Share your thoughts
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                If you’ve used this product, share your thoughts with other
                customers
              </p>

              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
              >
                Write a review
              </a>
            </div>
          </div>

          <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <h3 className="sr-only">Recent reviews</h3>

            <div className="flow-root">
              <div className="-my-12 divide-y divide-gray-200">
                {reviews.featured.map((review) => (
                  <div key={review.id} className="py-12">
                    <div className="flex items-center">
                      <img
                        alt={`${review.author}.`}
                        src={review.avatarSrc}
                        className="h-12 w-12 rounded-full"
                      />
                      <div className="ml-4">
                        <h4 className="text-sm font-bold text-gray-900">
                          {review.author}
                        </h4>
                        <div className="mt-1 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={classNames(
                                review.rating > rating
                                  ? "text-yellow-400"
                                  : "text-gray-300",
                                "h-5 w-5 flex-shrink-0"
                              )}
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {review.rating} out of 5 stars
                        </p>
                      </div>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{ __html: review.content }}
                      className="mt-4 space-y-6 text-base italic text-gray-600"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="perks-heading"
          className="border-t border-gray-200 bg-gray-800"
        >
          <h2 id="perks-heading" className="sr-only">
            Our perks
          </h2>

          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        alt=""
                        src={perk.imageUrl}
                        className="-my-1 mx-auto h-24 w-auto"
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-100">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-400">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// import { reviews } from "../data/reviews";
// import { StarIcon } from "@heroicons/react/20/solid";

// const categories = [
//   {
//     name: "New Arrivals",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
//   },
//   {
//     name: "Productivity",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
//   },
//   {
//     name: "Workspace",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg",
//   },
//   {
//     name: "Accessories",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
//   },
//   {
//     name: "Sale",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
//   },
// ];

// const collections = [
//   {
//     name: "Handcrafted Collection",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
//     imageAlt:
//       "Brown leather key ring with brass metal loops and rivets on wood table.",
//     description:
//       "Keep your phone, keys, and wallet together, so you can lose everything at once.",
//   },
//   {
//     name: "Organized Desk Collection",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
//     imageAlt:
//       "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
//     description:
//       "The rest of the house will still be a mess, but your desk will look great.",
//   },
//   {
//     name: "Focus Collection",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
//     imageAlt:
//       "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
//     description:
//       "Be more productive than enterprise project managers with a single piece of paper.",
//   },
// ];

// const offers = [
//   {
//     name: "Download the app",
//     description: "Get an exclusive $5 off code",
//     href: "#",
//   },
//   {
//     name: "Return when you're ready",
//     description: "60 days of free returns",
//     href: "#",
//   },
//   {
//     name: "Sign up for our newsletter",
//     description: "15% off your first order",
//     href: "#",
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Home() {
//   return (
//     <div className="bg-white">
//       <main>
//         {/* Hero */}
//         <div className="flex flex-col border-b border-gray-200 lg:border-0">
//           <nav aria-label="Offers" className="order-last lg:order-first">
//             <div className="mx-auto max-w-7xl lg:px-8">
//               <ul
//                 role="list"
//                 className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
//               >
//                 {offers.map((offer) => (
//                   <li key={offer.name} className="flex flex-col">
//                     <a
//                       href={offer.href}
//                       className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
//                     >
//                       <p className="text-sm text-gray-500">{offer.name}</p>
//                       <p className="font-semibold text-gray-900">
//                         {offer.description}
//                       </p>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </nav>

//           <div className="relative">
//             <div
//               aria-hidden="true"
//               className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
//             />
//             <div className="relative bg-gray-100 lg:bg-transparent">
//               <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
//                 <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
//                   <div className="lg:pr-16">
//                     <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
//                       Focus on what matters
//                     </h1>
//                     <p className="mt-4 text-xl text-gray-600">
//                       All the charts, datepickers, and notifications in the
//                       world can't beat checking off some items on a paper card.
//                     </p>
//                     <div className="mt-6">
//                       <a
//                         href="#"
//                         className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
//                       >
//                         Shop Productivity
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
//               <img
//                 alt=""
//                 src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
//           <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//               Shop by Category
//             </h2>
//             <a
//               href="#"
//               className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
//             >
//               Browse all categories
//               <span aria-hidden="true"> &rarr;</span>
//             </a>
//           </div>

//           <div className="mt-4 flow-root">
//             <div className="-my-2">
//               <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
//                 <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
//                   {categories.map((category) => (
//                     <a
//                       key={category.name}
//                       href={category.href}
//                       className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
//                     >
//                       <span aria-hidden="true" className="absolute inset-0">
//                         <img
//                           alt=""
//                           src={category.imageSrc}
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </span>
//                       <span
//                         aria-hidden="true"
//                         className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
//                       />
//                       <span className="relative mt-auto text-center text-xl font-bold text-white">
//                         {category.name}
//                       </span>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 px-4 sm:hidden">
//             <a
//               href="#"
//               className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
//             >
//               Browse all categories
//               <span aria-hidden="true"> &rarr;</span>
//             </a>
//           </div>
//         </div>

//         <section
//           aria-labelledby="collection-heading"
//           className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
//         >
//           <h2
//             id="collection-heading"
//             className="text-2xl font-bold tracking-tight text-gray-900"
//           >
//             Shop by Collection
//           </h2>
//           <p className="mt-4 text-base text-gray-500">
//             Each season, we collaborate with world-class designers to create a
//             collection inspired by the natural world.
//           </p>

//           <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
//             {collections.map((collection) => (
//               <a
//                 key={collection.name}
//                 href={collection.href}
//                 className="group block"
//               >
//                 <div
//                   aria-hidden="true"
//                   className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
//                 >
//                   <img
//                     alt={collection.imageAlt}
//                     src={collection.imageSrc}
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>
//                 <h3 className="mt-4 text-base font-semibold text-gray-900">
//                   {collection.name}
//                 </h3>
//                 <p className="mt-2 text-sm text-gray-500">
//                   {collection.description}
//                 </p>
//               </a>
//             ))}
//           </div>
//         </section>

//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
//           <div className="lg:col-span-4">
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//               Customer Reviews
//             </h2>

//             <div className="mt-3 flex items-center">
//               <div>
//                 <div className="flex items-center">
//                   {[0, 1, 2, 3, 4].map((rating) => (
//                     <StarIcon
//                       key={rating}
//                       aria-hidden="true"
//                       className={classNames(
//                         reviews.average > rating
//                           ? "text-yellow-400"
//                           : "text-gray-300",
//                         "h-5 w-5 flex-shrink-0"
//                       )}
//                     />
//                   ))}
//                 </div>
//                 <p className="sr-only">{reviews.average} out of 5 stars</p>
//               </div>
//               <p className="ml-2 text-sm text-gray-900">
//                 Based on {reviews.totalCount} reviews
//               </p>
//             </div>

//             <div className="mt-6">
//               <h3 className="sr-only">Review data</h3>

//               <dl className="space-y-3">
//                 {reviews.counts.map((count) => (
//                   <div key={count.rating} className="flex items-center text-sm">
//                     <dt className="flex flex-1 items-center">
//                       <p className="w-3 font-medium text-gray-900">
//                         {count.rating}
//                         <span className="sr-only"> star reviews</span>
//                       </p>
//                       <div
//                         aria-hidden="true"
//                         className="ml-1 flex flex-1 items-center"
//                       >
//                         <StarIcon
//                           aria-hidden="true"
//                           className={classNames(
//                             count.count > 0
//                               ? "text-yellow-400"
//                               : "text-gray-300",
//                             "h-5 w-5 flex-shrink-0"
//                           )}
//                         />

//                         <div className="relative ml-3 flex-1">
//                           <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
//                           {count.count > 0 ? (
//                             <div
//                               style={{
//                                 width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
//                               }}
//                               className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
//                             />
//                           ) : null}
//                         </div>
//                       </div>
//                     </dt>
//                     <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
//                       {Math.round((count.count / reviews.totalCount) * 100)}%
//                     </dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>

//             <div className="mt-10">
//               <h3 className="text-lg font-medium text-gray-900">
//                 Share your thoughts
//               </h3>
//               <p className="mt-1 text-sm text-gray-600">
//                 If you’ve used this product, share your thoughts with other
//                 customers
//               </p>

//               <a
//                 href="#"
//                 className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
//               >
//                 Write a review
//               </a>
//             </div>
//           </div>

//           <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
//             <h3 className="sr-only">Recent reviews</h3>

//             <div className="flow-root">
//               <div className="-my-12 divide-y divide-gray-200">
//                 {reviews.featured.map((review) => (
//                   <div key={review.id} className="py-12">
//                     <div className="flex items-center">
//                       <img
//                         alt={`${review.author}.`}
//                         src={review.avatarSrc}
//                         className="h-12 w-12 rounded-full"
//                       />
//                       <div className="ml-4">
//                         <h4 className="text-sm font-bold text-gray-900">
//                           {review.author}
//                         </h4>
//                         <div className="mt-1 flex items-center">
//                           {[0, 1, 2, 3, 4].map((rating) => (
//                             <StarIcon
//                               key={rating}
//                               aria-hidden="true"
//                               className={classNames(
//                                 review.rating > rating
//                                   ? "text-yellow-400"
//                                   : "text-gray-300",
//                                 "h-5 w-5 flex-shrink-0"
//                               )}
//                             />
//                           ))}
//                         </div>
//                         <p className="sr-only">
//                           {review.rating} out of 5 stars
//                         </p>
//                       </div>
//                     </div>

//                     <div
//                       dangerouslySetInnerHTML={{ __html: review.content }}
//                       className="mt-4 space-y-6 text-base italic text-gray-600"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="overflow-hidden pt-32 sm:pt-14">
//           <div className="bg-gray-800">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//               <div className="relative pb-16 pt-48 sm:pb-24">
//                 <div>
//                   <h2
//                     id="sale-heading"
//                     className="text-4xl font-bold tracking-tight text-white md:text-5xl"
//                   >
//                     Final Stock.
//                     <br />
//                     Up to 50% off.
//                   </h2>
//                   <div className="mt-6 text-base">
//                     <a href="#" className="font-semibold text-white">
//                       Shop the sale
//                       <span aria-hidden="true"> &rarr;</span>
//                     </a>
//                   </div>
//                 </div>

//                 <div className="absolute -top-32 left-1/2 min-w-max -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
//                   <div className="ml-24 flex space-x-6 sm:ml-3 lg:space-x-8">
//                     <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
//                       <div className="flex-shrink-0">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
//                           className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
//                         />
//                       </div>

//                       <div className="mt-6 flex-shrink-0 sm:mt-0">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
//                           className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
//                         />
//                       </div>
//                     </div>
//                     <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
//                       <div className="flex-shrink-0">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg"
//                           className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
//                         />
//                       </div>

//                       <div className="mt-6 flex-shrink-0 sm:mt-0">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg"
//                           className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
//                         />
//                       </div>
//                     </div>
//                     <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
//                       <div className="flex-shrink-0">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
//                           className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
//                         />
//                       </div>

//                       <div className="mt-6 flex-shrink-0 sm:mt-0">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
//                           className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// import Image from "next/image";
// import { categories } from "../data/categories";
// import { collections } from "../data/collections";
// import hero from "../media/hero.jpg";

// export default function Home() {
//   return (
//     <div className="bg-white dark:bg-gray-800">
//       {/* Hero section */}
//       <div className="relative bg-gray-900">
//         {/* Decorative image and overlay */}
//         <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
//           <Image
//             alt="Outdoor bouldering hero"
//             src={hero}
//             className="h-full w-full object-cover object-center"
//             placeholder="blur"
//           />
//         </div>
//         <div
//           aria-hidden="true"
//           className="absolute inset-0 bg-gray-900 opacity-40"
//         />

//         <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
//           <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
//             New arrivals are here
//           </h1>
//           <p className="mt-4 text-xl text-white">
//             The new arrivals have, well, newly arrived. Check out the latest
//             options from our summer small-batch release while they're still in
//             stock.
//           </p>
//           <a
//             href="#"
//             className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
//           >
//             Shop New Arrivals
//           </a>
//         </div>
//       </div>

//       <main>
//         {/* Category section */}
//         <section
//           aria-labelledby="category-heading"
//           className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
//         >
//           <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
//             <h2
//               id="category-heading"
//               className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
//             >
//               Shop by Category
//             </h2>
//             <a
//               href="#"
//               className="hidden text-sm font-semibold text-sky-600 hover:text-sky-500 sm:block"
//             >
//               Browse all categories
//               <span aria-hidden="true"> &rarr;</span>
//             </a>
//           </div>

//           <div className="mt-4 flow-root">
//             <div className="-my-2">
//               <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
//                 <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-x-0 xl:px-0">
//                   {categories.map((category) => (
//                     <a
//                       key={category.name}
//                       href={category.href}
//                       className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
//                     >
//                       <span aria-hidden="true" className="absolute inset-0">
//                         <Image
//                           alt=""
//                           src={category.imageSrc}
//                           className="h-full w-full object-cover object-center"
//                           placeholder="blur"
//                         />
//                       </span>
//                       <span
//                         aria-hidden="true"
//                         className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
//                       />
//                       <span className="relative mt-auto text-center text-xl font-bold text-white">
//                         {category.name}
//                       </span>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 px-4 sm:hidden">
//             <a
//               href="#"
//               className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
//             >
//               Browse all categories
//               <span aria-hidden="true"> &rarr;</span>
//             </a>
//           </div>
//         </section>

//         {/* Featured section */}
//         <section
//           aria-labelledby="social-impact-heading"
//           className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
//         >
//           <div className="relative overflow-hidden rounded-lg">
//             <div className="absolute inset-0">
//               <img
//                 alt=""
//                 src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
//               <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
//                 <h2
//                   id="social-impact-heading"
//                   className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
//                 >
//                   <span className="block sm:inline">Level up</span>
//                   <span className="block sm:inline">your desk</span>
//                 </h2>
//                 <p className="mt-3 text-xl text-white">
//                   Make your desk beautiful and organized. Post a picture to
//                   social media and watch it get more likes than life-changing
//                   announcements. Reflect on the shallow nature of existence. At
//                   least you have a really nice desk setup.
//                 </p>
//                 <a
//                   href="#"
//                   className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
//                 >
//                   Shop Workspace
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Collection section */}
//         <section
//           aria-labelledby="collection-heading"
//           className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
//         >
//           <h2
//             id="collection-heading"
//             className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
//           >
//             Shop by Collection
//           </h2>
//           <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
//             Each season, we collaborate with world-class designers to create a
//             collection inspired by the natural world.
//           </p>

//           <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
//             {collections.map((collection) => (
//               <a
//                 key={collection.name}
//                 href={collection.href}
//                 className="group block"
//               >
//                 <div
//                   aria-hidden="true"
//                   className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
//                 >
//                   <Image
//                     alt={collection.imageAlt}
//                     src={collection.imageSrc}
//                     className="h-full w-full object-cover object-center"
//                     placeholder="blur"
//                   />
//                 </div>
//                 <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-gray-100">
//                   {collection.name}
//                 </h3>
//                 <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                   {collection.description}
//                 </p>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* Featured section */}
//         <section
//           aria-labelledby="comfort-heading"
//           className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
//         >
//           <div className="relative overflow-hidden rounded-lg">
//             <div className="absolute inset-0">
//               <img
//                 alt=""
//                 src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
//               <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
//                 <h2
//                   id="comfort-heading"
//                   className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
//                 >
//                   Simple productivity
//                 </h2>
//                 <p className="mt-3 text-xl text-white">
//                   Endless tasks, limited hours, a single piece of paper. Not
//                   really a haiku, but we're doing our best here. No kanban
//                   boards, burndown charts, or tangled flowcharts with our Focus
//                   system. Just the undeniable urge to fill empty circles.
//                 </p>
//                 <a
//                   href="#"
//                   className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
//                 >
//                   Shop Focus
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* CTA section */}
//       <section aria-labelledby="sale-heading">
//         <div className="overflow-hidden pt-32 sm:pt-14">
//           <div className="bg-gray-950">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//               <div className="relative pb-16 pt-48 sm:pb-24">
//                 <div>
//                   <h2
//                     id="sale-heading"
//                     className="text-4xl font-bold tracking-tight text-white md:text-5xl"
//                   >
//                     Final Stock.
//                     <br />
//                     Up to 50% off.
//                   </h2>
//                   <div className="mt-6 text-base">
//                     <a href="#" className="font-semibold text-white">
//                       Shop the sale
//                       <span aria-hidden="true"> &rarr;</span>
//                     </a>
//                   </div>
//                 </div>

//                 <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
//                   <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
//                     <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
//                       <div className="flex-shrink-0">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
//                           className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
//                         />
//                       </div>

//                       <div className="mt-6 flex-shrink-0 sm:mt-0">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
//                           className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
//                         />
//                       </div>
//                     </div>
//                     <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
//                       <div className="flex-shrink-0">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg"
//                           className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
//                         />
//                       </div>

//                       <div className="mt-6 flex-shrink-0 sm:mt-0">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg"
//                           className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
//                         />
//                       </div>
//                     </div>
//                     <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
//                       <div className="flex-shrink-0">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
//                           className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
//                         />
//                       </div>

//                       <div className="mt-6 flex-shrink-0 sm:mt-0">
//                         <img
//                           alt=""
//                           src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
//                           className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
