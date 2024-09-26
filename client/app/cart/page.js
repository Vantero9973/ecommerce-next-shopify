"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import Stripe from "stripe";

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

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, addToCart } = useCart();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    async function fetchCartProducts() {
      const products = await Promise.all(
        cartItems.map(async (cartItem) => {
          const product = await fetchProduct(cartItem.id);
          return { ...cartItem, ...product };
        })
      );
      setCartProducts(products);
    }
    fetchCartProducts();
  }, [cartItems]);

  const totalPrice = cartProducts
    .reduce(
      (acc, item) =>
        acc + item.quantity * (item.default_price?.unit_amount / 100),
      0
    )
    .toFixed(2);

  const handleQuantityChange = (e, product) => {
    const newQuantity = parseInt(e.target.value);
    const difference = newQuantity - product.quantity;
    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        addToCart(product);
      }
    } else {
      for (let i = 0; i < Math.abs(difference); i++) {
        removeFromCart(product.id);
      }
    }
  };

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {cartProducts.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <Image
                      alt={product.name}
                      src={product.image}
                      width={500}
                      height={300}
                      placeholder="empty"
                      className="!h-24 !w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <h3 className="text-sm">
                          <a
                            href={`/products/${product.id}`}
                            className="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product?.metadata?.brand}
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          $
                          {(product.default_price?.unit_amount / 100).toFixed(
                            2
                          )}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label
                          htmlFor={`quantity-${productIdx}`}
                          className="sr-only"
                        >
                          Quantity, {product.name}
                        </label>
                        <select
                          id={`quantity-${productIdx}`}
                          name={`quantity-${productIdx}`}
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                          value={product.quantity}
                          onChange={(e) => handleQuantityChange(e, product)}
                        >
                          {[...Array(10).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                              {num + 1}
                            </option>
                          ))}
                        </select>

                        <div className="absolute right-0 top-0">
                          <button
                            type="button"
                            className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => removeFromCart(product.id)}
                          >
                            <span className="sr-only">Remove</span>
                            <XMarkIconMini
                              aria-hidden="true"
                              className="h-5 w-5"
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product.inStock ? (
                        <CheckIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        />
                      ) : (
                        <ClockIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-gray-300"
                        />
                      )}

                      <span>
                        {product.inStock
                          ? "In stock"
                          : `Ships in ${product.leadTime}`}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {cartProducts.length > 0 && (
              <button
                type="button"
                className="mt-4 w-full rounded-md bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            )}
          </section>

          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">
                  ${totalPrice}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how shipping is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$5.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how tax is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$8.32</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">
                  Order total
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  ${(parseFloat(totalPrice) + 5 + 8.32).toFixed(2)}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <Link href="/checkout">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Checkout
                </button>
              </Link>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}
