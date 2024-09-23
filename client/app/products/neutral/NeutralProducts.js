"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HomeIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";

const pages = [
  { name: "Products", href: "/products", current: false },
  { name: "Neutral", href: "/products/neutral", current: true },
];

const filters = [
  {
    id: "brands",
    name: "Brands",
    options: [
      { value: "La Sportiva", label: "La Sportiva" },
      { value: "Scarpa", label: "Scarpa" },
      { value: "Evolv", label: "Evolv" },
      { value: "Butera", label: "Butera" },
      { value: "Black Diamond", label: "Black Diamond" },
    ],
  },
  {
    id: "price",
    name: "Price",
    options: [
      { value: "50-100", label: "$50-$100" },
      { value: "100-150", label: "$100-$150" },
      { value: "150+", label: "$150+" },
    ],
  },
];

export default function FilteredProducts({ neutralProducts }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);

  const filterProducts = () => {
    return neutralProducts.filter((product) => {
      const brandMatch =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.metadata.brand);

      const price = product.default_price?.unit_amount
        ? product.default_price.unit_amount / 100
        : 0;
      const priceMatch =
        selectedPrice.length === 0 ||
        (selectedPrice.includes("50-100") && price >= 50 && price <= 100) ||
        (selectedPrice.includes("100-150") && price > 100 && price <= 150) ||
        (selectedPrice.includes("150+") && price > 150);

      return brandMatch && priceMatch;
    });
  };

  const filteredProducts = filterProducts();

  const handleResetFilters = (e) => {
    e.preventDefault();
    setSelectedBrands([]);
    setSelectedPrice([]);
  };

  return (
    <div className="bg-gray-50">
      <div>
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4">
                {filters.map((section) => (
                  <Disclosure
                    key={section.name}
                    as="div"
                    className="border-t border-gray-200 pb-4 pt-4"
                  >
                    <fieldset>
                      <legend className="w-full px-2">
                        <DisclosureButton className="group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                          <span className="text-sm font-medium text-gray-900">
                            {section.name}
                          </span>
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="h-5 w-5 rotate-0 transform group-data-[open]:-rotate-180"
                          />
                        </DisclosureButton>
                      </legend>
                      <DisclosurePanel className="px-4 pb-2 pt-4">
                        <div className="space-y-6">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`${section.id}-${optionIdx}-mobile`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                checked={
                                  section.id === "brands"
                                    ? selectedBrands.includes(option.value)
                                    : selectedPrice.includes(option.value)
                                }
                                onChange={(e) => {
                                  const setFilter =
                                    section.id === "brands"
                                      ? setSelectedBrands
                                      : setSelectedPrice;
                                  const isChecked = e.target.checked;
                                  const value = option.value;

                                  setFilter((prev) =>
                                    isChecked
                                      ? [...prev, value]
                                      : prev.filter((v) => v !== value)
                                  );
                                }}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />

                              <label
                                htmlFor={`${section.id}-${optionIdx}-mobile`}
                                className="ml-3 text-sm text-gray-500"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </fieldset>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10 pt-24">
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
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
              Neutral Profile Climbing Shoes
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Check out the latest arrivals in climbing shoes, featuring
              advanced designs for every type of climber!
            </p>
          </div>

          <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusIcon
                  aria-hidden="true"
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? null : "pt-10"}
                    >
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">
                          {section.name}
                        </legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                checked={
                                  section.id === "brands"
                                    ? selectedBrands.includes(option.value)
                                    : selectedPrice.includes(option.value)
                                }
                                onChange={(e) => {
                                  const setFilter =
                                    section.id === "brands"
                                      ? setSelectedBrands
                                      : setSelectedPrice;
                                  const isChecked = e.target.checked;
                                  const value = option.value;

                                  setFilter((prev) =>
                                    isChecked
                                      ? [...prev, value]
                                      : prev.filter((v) => v !== value)
                                  );
                                }}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="mt-4 px-3 py-1.5 text-sm bg-sky-600 hover:bg-sky-500 text-white rounded-md"
                  >
                    Reset Filters
                  </button>
                </form>
              </div>
            </aside>

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
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
                            className="!h-full !w-full object-contain object-center"
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
                            <p className="mt-1 text-sm text-gray-900">
                              ${price}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>No products available.</p>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
