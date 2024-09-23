"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import all from "../media/all.jpg";
import aggressive from "../media/aggressive.jpg";
import moderate from "../media/moderate.jpeg";
import neutral from "../media/neutral.png";
import { useCart } from "../app/context/CartContext";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { GiMountaintop } from "react-icons/gi";
import Search from "./Search";

const navigation = {
  categories: [
    {
      name: "Shop",
      featured: [
        {
          name: "All",
          href: "/products",
          cta: "Shop all",
          imageSrc:
            "https://d1nymbkeomeoqg.cloudfront.net/photos/28/81/409670_25302_XL.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Aggressive",
          href: "/products/aggressive",
          cta: "Shop Now",
          imageSrc:
            "https://d1nymbkeomeoqg.cloudfront.net/photos/24/26/364114_24477_XL.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
        {
          name: "Moderate",
          href: "/products/moderate",
          cta: "Shop Now",
          imageSrc:
            "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Climbing/Climbing%20Shoes/La%20Sportiva%20TC%20Pro%20climbing%20shoe%20%28edging%29_0.jpeg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Neutral",
          href: "/products/neutral",
          cta: "Shop Now",
          imageSrc:
            "https://methodclimb.com/wp-content/uploads/2024/03/climbing-shoes.png",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
    },
  ],
  pages: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Example() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="bg-white">
      <Search open={searchOpen} setOpen={setSearchOpen} />
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-12 px-4 py-6"
                  >
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                            <Image
                              alt={item.imageAlt}
                              src={item.imageSrc}
                              width={500}
                              height={300}
                              placeholder="empty"
                              className="object-cover object-center"
                            />
                          </div>
                          <Link
                            href={item.href}
                            className="mt-6 block text-sm font-medium text-gray-900"
                            onClick={() => setOpen(false)}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </Link>
                          <p
                            aria-hidden="true"
                            className="mt-1 text-sm text-gray-500"
                          >
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative">
        <nav aria-label="Top">
          <div className="bg-gray-800">
            <div className="mx-auto flex h-12 w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
              <p className="text-sm text-white tracking-wider text-center">
                Free UPS Ground shipping on orders over $99! Use code SHIPFREE
                at checkout.
              </p>
            </div>
          </div>

          <div className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-[72px] items-center justify-between">
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <Link href="/">
                    <span className="sr-only">Summit Climbing Co.</span>
                    <GiMountaintop className="my-auto h-10 w-10 rounded-full bg-sky-600 text-white" />
                  </Link>
                </div>

                <div className="hidden h-full lg:flex">
                  <PopoverGroup className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          <div className="relative flex">
                            <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:text-indigo-600 outline-none focus:outline-none">
                              {category.name}
                              <span
                                aria-hidden="true"
                                className="absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out bg-transparent group-data-[open]:bg-indigo-600"
                              />
                            </PopoverButton>
                          </div>

                          <PopoverPanel
                            transition
                            className="absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {({ close }) => (
                              <div>
                                <div
                                  aria-hidden="true"
                                  className="absolute inset-0 top-1/2 bg-white shadow"
                                />
                                <div
                                  aria-hidden="true"
                                  className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                                >
                                  <div className="h-px w-full bg-transparent transition-colors duration-200 ease-out group-data-[open]:bg-gray-200" />
                                </div>

                                <div className="relative">
                                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                            <Image
                                              alt={item.imageAlt}
                                              src={item.imageSrc}
                                              width={500}
                                              height={300}
                                              placeholder="empty"
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <Link
                                            href={item.href}
                                            className="mt-4 block font-medium text-gray-900"
                                            onClick={() => close()}
                                          >
                                            <span
                                              aria-hidden="true"
                                              className="absolute inset-0 z-10"
                                            />
                                            {item.name}
                                          </Link>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            {item.cta}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </PopoverPanel>
                        </Popover>
                      ))}

                      {navigation.pages.map((page) => (
                        <Link
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  </PopoverGroup>
                </div>

                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  <div
                    className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                    onClick={() => setSearchOpen(!searchOpen)}
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="h-6 w-6"
                    />
                  </div>
                </div>

                <Link href="/" className="lg:hidden">
                  <span className="sr-only">Summit Climbing Co.</span>
                  <GiMountaintop className="my-auto h-10 w-10 rounded-full bg-sky-600 text-white" />
                </Link>

                <div className="flex flex-1 items-center justify-end">
                  <div
                    className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block cursor-pointer"
                    onClick={() => setSearchOpen(!searchOpen)}
                  >
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-500 hover:text-gray-700"
                    />
                  </div>

                  <div className="ml-4 flow-root lg:ml-8">
                    <Link
                      href="/cart"
                      className="group -m-2 flex items-center p-2"
                    >
                      <ShoppingCartIcon
                        aria-hidden="true"
                        className="h-6 w-6 flex-shrink-0 text-gray-500 group-hover:text-gray-700"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {totalItems}
                      </span>
                      <span className="sr-only">
                        {totalItems} items in cart, view bag
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
