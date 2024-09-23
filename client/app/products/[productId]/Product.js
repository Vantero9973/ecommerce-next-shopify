"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  ChevronRightIcon,
  HomeIcon,
  MinusIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/20/solid";

export default function Product({ price, product, relatedProducts }) {
  const { addToCart } = useCart();

  const pages = [
    { name: "Products", href: "/products", current: false },
    { name: product.name, href: `/products/${product.id}`, current: true },
  ];

  const handleAddToCart = (e) => {
    e.preventDefault();

    addToCart({
      id: product.id,
      name: product.name,
      price: product.default_price?.unit_amount / 100,
      quantity: 1,
      image: product.images[0],
    });
  };

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <TabGroup className="flex flex-col-reverse">
              <TabPanels className="aspect-h-1 aspect-w-1 w-full">
                {product.images.map((image) => (
                  <TabPanel key={image.id}>
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={500}
                      height={500}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                      priority={true}
                      className="!h-full !w-full object-contain object-center sm:rounded-lg px-5"
                    />
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <nav aria-label="Breadcrumb" className="flex">
                <ol role="list" className="flex items-center space-x-4">
                  <li>
                    <div>
                      <Link
                        href="/"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <HomeIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0"
                        />
                        <span className="sr-only">Home</span>
                      </Link>
                    </div>
                  </li>
                  {pages.map((page) => (
                    <li key={page.name}>
                      <div className="flex items-center">
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                        />
                        <Link
                          href={page.href}
                          aria-current={page.current ? "page" : undefined}
                          className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                        >
                          {page.name}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ol>
              </nav>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Brand</h2>
                <p className="text-gray-900">{product.metadata.brand}</p>
              </div>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-xl font-medium text-gray-900">${price}</p>
              </div>

              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        aria-hidden="true"
                        className="h-5 w-5 text-indigo-500 flex-shrink-0"
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-500">5.0 out of 5.0</p>
                  <p className="ml-2 text-sm text-gray-500">(24 reviews)</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <p className="text-gray-900">{product.description}</p>
              </div>

              <form className="mt-6" onSubmit={handleAddToCart}>
                <div className="mt-10 flex">
                  <button
                    type="submit"
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-sky-600 px-8 py-3 text-base font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                    Add to cart
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                  <Disclosure as="div">
                    <h3>
                      <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                        <span className="text-sm text-gray-900">Features</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="hidden h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:block"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="prose prose-sm pb-6">
                      <ul className="text-sm list-disc list-inside">
                        <li>
                          Adjustable Velcro or lace-up closure for a secure fit
                        </li>
                        <li>
                          High-performance rubber sole for superior grip on all
                          surfaces
                        </li>
                        <li>
                          Downturned toe design for precision on steep climbs
                        </li>
                        <li>
                          Breathable upper to reduce moisture during long
                          sessions
                        </li>
                        <li>
                          Durable construction for extended use on both indoor
                          and outdoor climbs
                        </li>
                        <li>
                          Reinforced heel for improved hooking capabilities
                        </li>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>

                  <Disclosure as="div">
                    <h3>
                      <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                        <span className="text-sm text-gray-900">Care</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="hidden h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:block"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="prose prose-sm pb-6">
                      <ul className="text-sm list-disc list-inside">
                        <li>Spot clean with a damp cloth after each use</li>
                        <li>Hand wash with mild soap for deep cleaning</li>
                        <li>
                          Avoid prolonged exposure to direct sunlight to prevent
                          material degradation
                        </li>
                        <li>
                          Use a soft brush to remove dirt from the rubber sole
                        </li>
                        <li>
                          Air dry completely before storing to maintain shape
                          and prevent odors
                        </li>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>

                  <Disclosure as="div">
                    <h3>
                      <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                        <span className="text-sm text-gray-900">Shipping</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="hidden h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:block"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="prose prose-sm pb-6">
                      <ul className="text-sm list-disc list-inside">
                        <li>Free shipping on orders over $100</li>
                        <li>International shipping available</li>
                        <li>Expedited shipping options</li>
                        <li>Signature required upon delivery</li>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>

                  <Disclosure as="div">
                    <h3>
                      <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                        <span className="text-sm text-gray-900">Returns</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="hidden h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:block"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="prose prose-sm pb-6">
                      <ul className="text-sm list-disc list-inside">
                        <li>Easy return requests</li>
                        <li>Pre-paid shipping label included</li>
                        <li>10% restocking fee for returns</li>
                        <li>60 day return window</li>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </section>
            </div>
          </div>

          <section
            aria-labelledby="related-heading"
            className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0"
          >
            <h2
              id="related-heading"
              className="text-xl font-bold text-gray-900"
            >
              Customers also bought
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((relatedProduct) => {
                const price = relatedProduct.default_price?.unit_amount
                  ? (relatedProduct.default_price.unit_amount / 100).toFixed(2)
                  : "N/A";
                return (
                  <div
                    key={relatedProduct.id}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 divide-y divide-gray-200 bg-white"
                  >
                    <div className="aspect-h-4 aspect-w-3 bg-white shadow sm:aspect-none group-hover:opacity-75 sm:h-96">
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        width={500}
                        height={500}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                        className="!h-full !w-full object-contain object-center sm:rounded-lg px-5"
                        placeholder="empty"
                      />
                    </div>
                    <div className="flex flex-1 flex-col space-y-2 p-4">
                      <p className="text-sm font-semibold text-gray-700">
                        {relatedProduct.metadata.brand}
                      </p>
                      <h3 className="text-[15px] text-gray-900">
                        <Link href={`/products/${relatedProduct.id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {relatedProduct.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">
                        {relatedProduct.description.length > 60
                          ? `${relatedProduct.description.slice(0, 60)}...`
                          : relatedProduct.description}
                      </p>
                      <div className="flex flex-1 flex-col justify-end">
                        <p className="mt-1 text-sm text-gray-900">${price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
