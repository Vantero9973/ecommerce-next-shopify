"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Loader from "./Loader";

export default function Search({ open, setOpen }) {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const inputRef = useRef(null);

  const fetchStripeProducts = async () => {
    try {
      const response = await fetch("/api/stripe_products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const products = await response.json();
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setHasSearched(true);
    setIsLoading(true);
    const lowerCaseQuery = query.toLowerCase();

    const products = await fetchStripeProducts();

    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        (product.metadata?.brand?.toLowerCase() || "").includes(
          lowerCaseQuery
        ) ||
        product.description.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredProducts(results);
    setIsLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
    setQuery("");
    setFilteredProducts([]);
    setHasSearched(false);
    setIsLoading(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className="relative z-10"
      initialFocus={inputRef}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full max-w-2xl">
            <div
              className={`relative ${
                !isLoading && hasSearched && filteredProducts.length > 0
                  ? "rounded-lg"
                  : "shadow-sm border-b border-gray-200"
              }`}
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400"
                />
              </div>
              <form onSubmit={handleSearch}>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search..."
                  className="block w-full py-3 pl-10 text-gray-900 border-0 focus:border-0 ring-0 focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setHasSearched(false);
                  }}
                />
              </form>
            </div>

            {isLoading && <Loader />}

            {!isLoading && filteredProducts.length > 0 && (
              <ul className="max-h-[36rem] overflow-y-scroll">
                {filteredProducts.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-center space-x-4 px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleClose();
                      router.push(`/products/${product.id}`);
                    }}
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={60}
                        height={60}
                        className="!h-full !w-full rounded-md object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-700">
                        {product.metadata?.brand || "No brand"}
                      </p>
                      <p className="text-[15px] font-semibold text-gray-900">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
                        {product.description}
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        ${(product.default_price?.unit_amount / 100).toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {!isLoading && hasSearched && filteredProducts.length === 0 && (
              <p className="mt-4 text-sm text-gray-500">No products found</p>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
