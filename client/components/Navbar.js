"use client";

import { Fragment, useState } from "react";
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
  QuestionMarkCircleIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  categories: [
    {
      name: "Shop",
      featured: [
        {
          name: "All",
          href: "/products/trending",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Neutral",
          href: "/products/neutral",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Moderate",
          href: "/products/moderate",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Aggressive",
          href: "/products/aggressive",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
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

            {/* Links */}
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
                            <img
                              alt={item.imageAlt}
                              src={item.imageSrc}
                              className="object-cover object-center"
                            />
                          </div>
                          <a
                            href={item.href}
                            className="mt-6 block text-sm font-medium text-gray-900"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </a>
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
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative">
        <nav aria-label="Top">
          <div className="bg-gray-900">
            <div className="mx-auto flex h-12 w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
              <p className="text-sm text-white tracking-wider">
                Free UPS Ground shipping on orders over $99! Use code SHIPFREE
                at checkout.
              </p>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-[72px] items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Flyout menus */}
                  <PopoverGroup className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          <div className="relative flex">
                            <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:text-indigo-600">
                              {category.name}
                              <span
                                aria-hidden="true"
                                className="absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out group-data-[open]:bg-indigo-600"
                              />
                            </PopoverButton>
                          </div>

                          <PopoverPanel
                            transition
                            className="group absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 top-1/2 bg-white shadow"
                            />
                            {/* Fake border when menu is open */}
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
                                        <img
                                          alt={item.imageAlt}
                                          src={item.imageSrc}
                                          className="object-cover object-center"
                                        />
                                      </div>
                                      <a
                                        href={item.href}
                                        className="mt-4 block font-medium text-gray-900"
                                      >
                                        <span
                                          aria-hidden="true"
                                          className="absolute inset-0 z-10"
                                        />
                                        {item.name}
                                      </a>
                                      <p aria-hidden="true" className="mt-1">
                                        Shop now
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </Popover>
                      ))}

                      {navigation.pages.map((page) => (
                        <a
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          {page.name}
                        </a>
                      ))}
                    </div>
                  </PopoverGroup>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* Search */}
                  <a
                    href="#"
                    className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="h-6 w-6"
                    />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>

                <div className="flex flex-1 items-center justify-end">
                  <a
                    href="#"
                    className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
                  >
                    Search
                  </a>

                  <div className="flex items-center lg:ml-8">
                    {/* Help */}
                    <a
                      href="#"
                      className="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                    >
                      <span className="sr-only">Help</span>
                      <QuestionMarkCircleIcon
                        aria-hidden="true"
                        className="h-6 w-6"
                      />
                    </a>
                    <a
                      href="#"
                      className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
                    >
                      Help
                    </a>

                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-8">
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <ShoppingCartIcon
                          aria-hidden="true"
                          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          0
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
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

// "use client";
// import { Fragment, useState } from "react";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
//   Tab,
//   TabGroup,
//   TabList,
//   TabPanel,
//   TabPanels,
// } from "@headlessui/react";
// import {
//   Bars3Icon,
//   ShoppingBagIcon,
//   XMarkIcon as XMarkIconOutline,
// } from "@heroicons/react/24/outline";
// import { GiMountaintop } from "react-icons/gi";
// import chalkBagsCollection from "../media/chalk-bags-collection.jpeg";
// import newClimbingGear from "../media/new-climbing-gear.jpg";
// import Image from "next/image";
// import Link from "next/link";

// const navigation = {
//   categories: [
//     {
//       id: "shop",
//       name: "Shop",
//       featured: [
//         {
//           name: "New Climbing Gear",
//           href: "/",
//           imageSrc: newClimbingGear,
//           imageAlt:
//             "Top-of-the-line climbing harness with adjustable straps and reinforced stitching.",
//         },
//         {
//           name: "Chalk Bags Collection",
//           href: "/",
//           imageSrc: chalkBagsCollection,
//           imageAlt:
//             "Colorful chalk bags arranged in a row with drawstring closures and carabiner clips.",
//         },
//       ],
//       sections: [
//         {
//           id: "climbing-gear",
//           name: "Climbing Gear",
//           items: [
//             { name: "Harnesses", href: "/" },
//             { name: "Carabiners", href: "/" },
//             { name: "Climbing Shoes", href: "/" },
//             { name: "Belay Devices", href: "/" },
//             { name: "Quickdraws", href: "/" },
//             { name: "Helmets", href: "/" },
//           ],
//         },
//         {
//           id: "accessories",
//           name: "Accessories",
//           items: [
//             { name: "Chalk & Chalk Bags", href: "/" },
//             { name: "Crash Pads", href: "/" },
//             { name: "Tape & Skin Care", href: "/" },
//             { name: "Headlamps", href: "/" },
//           ],
//         },
//         {
//           id: "brands",
//           name: "Brands",
//           items: [
//             { name: "La Sportiva", href: "/" },
//             { name: "Scarpa", href: "/" },
//             { name: "Black Diamond", href: "/" },
//             { name: "Petzl", href: "/" },
//             { name: "Metolius", href: "/" },
//           ],
//         },
//       ],
//     },
//   ],
//   pages: [
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//   ],
// };

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="bg-slate-800">
//       <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
//         <DialogBackdrop
//           transition
//           className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
//         />

//         <div className="fixed inset-0 z-40 flex">
//           <DialogPanel
//             transition
//             className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-slate-800 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
//           >
//             <div className="flex px-4 pb-2 pt-5">
//               <button
//                 type="button"
//                 onClick={() => setOpen(false)}
//                 className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-slate-400"
//               >
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIconOutline aria-hidden="true" className="h-6 w-6" />
//               </button>
//             </div>

//             {/* Links */}
//             <TabGroup className="mt-2">
//               <div className="border-b border-slate-700">
//                 <TabList className="-mb-px flex space-x-8 px-4">
//                   {navigation.categories.map((category) => (
//                     <Tab
//                       key={category.name}
//                       className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-slate-100 data-[selected]:border-sky-700 data-[selected]:text-sky-700"
//                     >
//                       {category.name}
//                     </Tab>
//                   ))}
//                 </TabList>
//               </div>
//               <TabPanels as={Fragment}>
//                 {navigation.categories.map((category) => (
//                   <TabPanel
//                     key={category.name}
//                     className="space-y-10 px-4 pb-8 pt-10"
//                   >
//                     <div className="grid grid-cols-2 gap-x-4">
//                       {category.featured.map((item) => (
//                         <div key={item.name} className="group relative text-sm">
//                           <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-slate-100 group-hover:opacity-75">
//                             <Image
//                               alt={item.imageAlt}
//                               src={item.imageSrc}
//                               placeholder="blur"
//                               className="object-cover object-center"
//                             />
//                           </div>
//                           <a
//                             href={item.href}
//                             className="mt-6 block font-medium text-slate-100"
//                           >
//                             <span
//                               aria-hidden="true"
//                               className="absolute inset-0 z-10"
//                             />
//                             {item.name}
//                           </a>
//                           <p aria-hidden="true" className="mt-1">
//                             Shop now
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                     {category.sections.map((section) => (
//                       <div key={section.name}>
//                         <p
//                           id={`${category.id}-${section.id}-heading-mobile`}
//                           className="font-medium text-slate-100"
//                         >
//                           {section.name}
//                         </p>
//                         <ul
//                           aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                           className="mt-6 flex flex-col space-y-6"
//                         >
//                           {section.items.map((item) => (
//                             <li key={item.name} className="flow-root">
//                               <a
//                                 href={item.href}
//                                 className="-m-2 block p-2 text-slate-400"
//                               >
//                                 {item.name}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </TabPanel>
//                 ))}
//               </TabPanels>
//             </TabGroup>

//             <div className="space-y-6 border-t border-slate-700 px-4 py-6">
//               {navigation.pages.map((page) => (
//                 <div key={page.name} className="flow-root">
//                   <a
//                     href={page.href}
//                     className="-m-2 block p-2 font-medium text-slate-100"
//                   >
//                     {page.name}
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </DialogPanel>
//         </div>
//       </Dialog>

//       <header className="relative bg-slate-800">
//         <p className="flex h-10 items-center justify-center bg-slate-900 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
//           Get free delivery on orders over $100
//         </p>

//         <nav
//           aria-label="Top"
//           className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
//         >
//           <div className="border-b border-slate-700">
//             <div className="flex h-16 items-center">
//               <button
//                 type="button"
//                 onClick={() => setOpen(true)}
//                 className="relative rounded-md bg-slate-800 p-2 text-slate-400 lg:hidden"
//               >
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open menu</span>
//                 <Bars3Icon aria-hidden="true" className="h-6 w-6" />
//               </button>

//               {/* Logo */}
//               <div className="ml-4 flex lg:ml-0">
//                 <Link href="/">
//                   <span className="sr-only">Summit Gear Co.</span>
//                   <GiMountaintop className="h-12 w-12 bg-sky-700 text-slate-900 rounded-full" />
//                 </Link>
//               </div>

//               {/* Flyout menus */}
//               <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
//                 <div className="flex h-full space-x-8">
//                   {navigation.categories.map((category) => (
//                     <Popover key={category.name} className="flex">
//                       <div className="relative flex">
//                         <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-slate-300 transition-colors duration-200 ease-out hover:text-slate-100 data-[open]:border-sky-700 data-[open]:text-sky-700">
//                           {category.name}
//                         </PopoverButton>
//                       </div>

//                       <PopoverPanel
//                         transition
//                         className="absolute inset-x-0 top-full z-10 text-sm text-slate-400 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
//                       >
//                         {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
//                         <div
//                           aria-hidden="true"
//                           className="absolute inset-0 top-1/2 bg-slate-800 shadow"
//                         />

//                         <div className="relative bg-slate-800">
//                           <div className="mx-auto max-w-7xl px-8">
//                             <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
//                               <div className="col-start-2 grid grid-cols-2 gap-x-8">
//                                 {category.featured.map((item) => (
//                                   <div
//                                     key={item.name}
//                                     className="group relative text-base sm:text-sm"
//                                   >
//                                     <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-slate-800 group-hover:opacity-75">
//                                       <Image
//                                         alt={item.imageAlt}
//                                         src={item.imageSrc}
//                                         placeholder="blur"
//                                         className="object-cover object-center"
//                                       />
//                                     </div>
//                                     <a
//                                       href={item.href}
//                                       className="mt-6 block font-medium text-slate-100"
//                                     >
//                                       <span
//                                         aria-hidden="true"
//                                         className="absolute inset-0 z-10"
//                                       />
//                                       {item.name}
//                                     </a>
//                                     <p aria-hidden="true" className="mt-1">
//                                       Shop now
//                                     </p>
//                                   </div>
//                                 ))}
//                               </div>
//                               <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
//                                 {category.sections.map((section) => (
//                                   <div key={section.name}>
//                                     <p
//                                       id={`${section.name}-heading`}
//                                       className="font-medium text-slate-100"
//                                     >
//                                       {section.name}
//                                     </p>
//                                     <ul
//                                       aria-labelledby={`${section.name}-heading`}
//                                       className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
//                                     >
//                                       {section.items.map((item) => (
//                                         <li key={item.name} className="flex">
//                                           <a
//                                             href={item.href}
//                                             className="text-slate-400 hover:text-slate-100"
//                                           >
//                                             {item.name}
//                                           </a>
//                                         </li>
//                                       ))}
//                                     </ul>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </PopoverPanel>
//                     </Popover>
//                   ))}

//                   {navigation.pages.map((page) => (
//                     <a
//                       key={page.name}
//                       href={page.href}
//                       className="flex items-center text-sm font-medium text-slate-300 hover:text-slate-100"
//                     >
//                       {page.name}
//                     </a>
//                   ))}
//                 </div>
//               </PopoverGroup>

//               <div className="ml-auto flex items-center">
//                 {/* Cart */}
//                 <div className="ml-4 flow-root lg:ml-6">
//                   <Link
//                     href="/cart"
//                     className="group -m-2 flex items-center p-2"
//                   >
//                     <ShoppingBagIcon
//                       aria-hidden="true"
//                       className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-300"
//                     />
//                     <span className="ml-2 text-sm font-medium text-slate-300 group-hover:text-slate-100">
//                       0
//                     </span>
//                     <span className="sr-only">items in cart, view bag</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

// // "use client";

// // import { Fragment, useState } from "react";
// // import Link from "next/link";
// // import {
// //   Dialog,
// //   DialogBackdrop,
// //   DialogPanel,
// //   Popover,
// //   PopoverButton,
// //   PopoverGroup,
// //   PopoverPanel,
// //   Tab,
// //   TabGroup,
// //   TabList,
// //   TabPanel,
// //   TabPanels,
// // } from "@headlessui/react";
// // import {
// //   Bars3Icon,
// //   MagnifyingGlassIcon,
// //   QuestionMarkCircleIcon,
// //   ShoppingBagIcon,
// //   XMarkIcon,
// // } from "@heroicons/react/24/outline";
// // import { ChevronDownIcon } from "@heroicons/react/20/solid";
// // import { GiMountaintop } from "react-icons/gi";

// // const currencies = ["USD", "CAD", "AUD", "EUR", "GBP"];

// // const navigation = {
// //   categories: [
// //     {
// //       name: "Women",
// //       featured: [
// //         { name: "Sleep", href: "#" },
// //         { name: "Swimwear", href: "#" },
// //         { name: "Underwear", href: "#" },
// //       ],
// //       collection: [
// //         { name: "Everything", href: "#" },
// //         { name: "Core", href: "#" },
// //         { name: "New Arrivals", href: "#" },
// //         { name: "Sale", href: "#" },
// //       ],
// //       categories: [
// //         { name: "Basic Tees", href: "#" },
// //         { name: "Artwork Tees", href: "#" },
// //         { name: "Bottoms", href: "#" },
// //         { name: "Underwear", href: "#" },
// //         { name: "Accessories", href: "#" },
// //       ],
// //       brands: [
// //         { name: "Full Nelson", href: "#" },
// //         { name: "My Way", href: "#" },
// //         { name: "Re-Arranged", href: "#" },
// //         { name: "Counterfeit", href: "#" },
// //         { name: "Significant Other", href: "#" },
// //       ],
// //     },
// //     {
// //       name: "Men",
// //       featured: [
// //         { name: "Casual", href: "#" },
// //         { name: "Boxers", href: "#" },
// //         { name: "Outdoor", href: "#" },
// //       ],
// //       collection: [
// //         { name: "Everything", href: "#" },
// //         { name: "Core", href: "#" },
// //         { name: "New Arrivals", href: "#" },
// //         { name: "Sale", href: "#" },
// //       ],
// //       categories: [
// //         { name: "Artwork Tees", href: "#" },
// //         { name: "Pants", href: "#" },
// //         { name: "Accessories", href: "#" },
// //         { name: "Boxers", href: "#" },
// //         { name: "Basic Tees", href: "#" },
// //       ],
// //       brands: [
// //         { name: "Significant Other", href: "#" },
// //         { name: "My Way", href: "#" },
// //         { name: "Counterfeit", href: "#" },
// //         { name: "Re-Arranged", href: "#" },
// //         { name: "Full Nelson", href: "#" },
// //       ],
// //     },
// //   ],
// //   pages: [
// //     { name: "About", href: "/about" },
// //     { name: "Contact", href: "/contact" },
// //   ],
// // };

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <div className="bg-white">
// //       {/* Mobile menu */}
// //       <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
// //         <DialogBackdrop
// //           transition
// //           className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
// //         />

// //         <div className="fixed inset-0 z-40 flex">
// //           <DialogPanel
// //             transition
// //             className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
// //           >
// //             <div className="flex px-4 pb-2 pt-5">
// //               <button
// //                 type="button"
// //                 onClick={() => setOpen(false)}
// //                 className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
// //               >
// //                 <span className="sr-only">Close menu</span>
// //                 <XMarkIcon aria-hidden="true" className="h-6 w-6" />
// //               </button>
// //             </div>

// //             {/* Links */}
// //             <TabGroup className="mt-2">
// //               <div className="border-b border-gray-200">
// //                 <TabList className="-mb-px flex space-x-8 px-4">
// //                   {navigation.categories.map((category) => (
// //                     <Tab
// //                       key={category.name}
// //                       className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
// //                     >
// //                       {category.name}
// //                     </Tab>
// //                   ))}
// //                 </TabList>
// //               </div>
// //               <TabPanels as={Fragment}>
// //                 {navigation.categories.map((category) => (
// //                   <TabPanel
// //                     key={category.name}
// //                     className="space-y-12 px-4 py-6"
// //                   >
// //                     <div className="grid grid-cols-2 gap-x-4 gap-y-10">
// //                       {category.featured.map((item) => (
// //                         <div key={item.name} className="group relative">
// //                           <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
// //                             <img
// //                               alt={item.imageAlt}
// //                               src={item.imageSrc}
// //                               className="object-cover object-center"
// //                             />
// //                           </div>
// //                           <a
// //                             href={item.href}
// //                             className="mt-6 block text-sm font-medium text-gray-900"
// //                           >
// //                             <span
// //                               aria-hidden="true"
// //                               className="absolute inset-0 z-10"
// //                             />
// //                             {item.name}
// //                           </a>
// //                           <p
// //                             aria-hidden="true"
// //                             className="mt-1 text-sm text-gray-500"
// //                           >
// //                             Shop now
// //                           </p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </TabPanel>
// //                 ))}
// //               </TabPanels>
// //             </TabGroup>

// //             <div className="space-y-6 border-t border-gray-200 px-4 py-6">
// //               {navigation.pages.map((page) => (
// //                 <div key={page.name} className="flow-root">
// //                   <a
// //                     href={page.href}
// //                     className="-m-2 block p-2 font-medium text-gray-900"
// //                   >
// //                     {page.name}
// //                   </a>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="space-y-6 border-t border-gray-200 px-4 py-6">
// //               <div className="flow-root">
// //                 <a
// //                   href="#"
// //                   className="-m-2 block p-2 font-medium text-gray-900"
// //                 >
// //                   Create an account
// //                 </a>
// //               </div>
// //               <div className="flow-root">
// //                 <a
// //                   href="#"
// //                   className="-m-2 block p-2 font-medium text-gray-900"
// //                 >
// //                   Sign in
// //                 </a>
// //               </div>
// //             </div>

// //             <div className="space-y-6 border-t border-gray-200 px-4 py-6">
// //               {/* Currency selector */}
// //               <form>
// //                 <div className="inline-block">
// //                   <label htmlFor="mobile-currency" className="sr-only">
// //                     Currency
// //                   </label>
// //                   <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
// //                     <select
// //                       id="mobile-currency"
// //                       name="currency"
// //                       className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
// //                     >
// //                       {currencies.map((currency) => (
// //                         <option key={currency}>{currency}</option>
// //                       ))}
// //                     </select>
// //                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
// //                       <ChevronDownIcon
// //                         aria-hidden="true"
// //                         className="h-5 w-5 text-gray-500"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </form>
// //             </div>
// //           </DialogPanel>
// //         </div>
// //       </Dialog>

// //       <header className="relative z-10">
// //         <nav aria-label="Top">
// //           {/* Top navigation */}
// //           <div className="bg-gray-900">
// //             <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
// //               {/* Currency selector */}
// //               <form className="hidden lg:block lg:flex-1">
// //                 <div className="flex">
// //                   <label htmlFor="desktop-currency" className="sr-only">
// //                     Currency
// //                   </label>
// //                   <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
// //                     <select
// //                       id="desktop-currency"
// //                       name="currency"
// //                       className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
// //                     >
// //                       {currencies.map((currency) => (
// //                         <option key={currency}>{currency}</option>
// //                       ))}
// //                     </select>
// //                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
// //                       <ChevronDownIcon
// //                         aria-hidden="true"
// //                         className="h-5 w-5 text-gray-300"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </form>

// //               <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
// //                 Get free delivery on orders over $100
// //               </p>

// //               <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
// //                 <a
// //                   href="#"
// //                   className="text-sm font-medium text-white hover:text-gray-100"
// //                 >
// //                   Create an account
// //                 </a>
// //                 <span aria-hidden="true" className="h-6 w-px bg-gray-600" />
// //                 <a
// //                   href="#"
// //                   className="text-sm font-medium text-white hover:text-gray-100"
// //                 >
// //                   Sign in
// //                 </a>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Secondary navigation */}
// //           <div className="bg-white">
// //             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// //               <div className="flex h-16 items-center justify-between">
// //                 {/* Logo (lg+) */}
// //                 <div className="hidden lg:flex lg:flex-1 lg:items-center">
// //                   <Link href="/">
// //                     <span className="sr-only">Summit Gear Co.</span>
// //                     <GiMountaintop className="h-12 w-12 bg-sky-600 text-white rounded-full" />
// //                   </Link>
// //                 </div>

// //                 <div className="hidden h-full lg:flex">
// //                   {/* Flyout menus */}
// //                   <PopoverGroup className="inset-x-0 bottom-0 px-4">
// //                     <div className="flex h-full justify-center space-x-8">
// //                       {navigation.categories.map((category) => (
// //                         <Popover key={category.name} className="flex">
// //                           <div className="relative flex">
// //                             <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:text-indigo-600">
// //                               {category.name}
// //                               <span
// //                                 aria-hidden="true"
// //                                 className="absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out group-data-[open]:bg-indigo-600"
// //                               />
// //                             </PopoverButton>
// //                           </div>

// //                           <PopoverPanel
// //                             transition
// //                             className="group absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
// //                           >
// //                             {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
// //                             <div
// //                               aria-hidden="true"
// //                               className="absolute inset-0 top-1/2 bg-white shadow"
// //                             />
// //                             {/* Fake border when menu is open */}
// //                             <div
// //                               aria-hidden="true"
// //                               className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
// //                             >
// //                               <div className="h-px w-full bg-transparent transition-colors duration-200 ease-out group-data-[open]:bg-gray-200" />
// //                             </div>

// //                             <div className="relative">
// //                               <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// //                                 <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
// //                                   {category.featured.map((item) => (
// //                                     <div
// //                                       key={item.name}
// //                                       className="group relative"
// //                                     >
// //                                       <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
// //                                         <img
// //                                           alt={item.imageAlt}
// //                                           src={item.imageSrc}
// //                                           className="object-cover object-center"
// //                                         />
// //                                       </div>
// //                                       <a
// //                                         href={item.href}
// //                                         className="mt-4 block font-medium text-gray-900"
// //                                       >
// //                                         <span
// //                                           aria-hidden="true"
// //                                           className="absolute inset-0 z-10"
// //                                         />
// //                                         {item.name}
// //                                       </a>
// //                                       <p aria-hidden="true" className="mt-1">
// //                                         Shop now
// //                                       </p>
// //                                     </div>
// //                                   ))}
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           </PopoverPanel>
// //                         </Popover>
// //                       ))}

// //                       {navigation.pages.map((page) => (
// //                         <a
// //                           key={page.name}
// //                           href={page.href}
// //                           className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
// //                         >
// //                           {page.name}
// //                         </a>
// //                       ))}
// //                     </div>
// //                   </PopoverGroup>
// //                 </div>

// //                 {/* Mobile menu and search (lg-) */}
// //                 <div className="flex flex-1 items-center lg:hidden">
// //                   <button
// //                     type="button"
// //                     onClick={() => setOpen(true)}
// //                     className="-ml-2 rounded-md bg-white p-2 text-gray-400"
// //                   >
// //                     <span className="sr-only">Open menu</span>
// //                     <Bars3Icon aria-hidden="true" className="h-6 w-6" />
// //                   </button>

// //                   {/* Search */}
// //                   <a
// //                     href="#"
// //                     className="ml-2 p-2 text-gray-400 hover:text-gray-500"
// //                   >
// //                     <span className="sr-only">Search</span>
// //                     <MagnifyingGlassIcon
// //                       aria-hidden="true"
// //                       className="h-6 w-6"
// //                     />
// //                   </a>
// //                 </div>

// //                 {/* Logo (lg-) */}
// //                 <Link href="/" className="lg:hidden">
// //                   <span className="sr-only">Summit Gear Co.</span>
// //                   <GiMountaintop className="h-12 w-12 bg-sky-600 text-white rounded-full" />
// //                 </Link>

// //                 <div className="flex flex-1 items-center justify-end">
// //                   <a
// //                     href="#"
// //                     className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
// //                   >
// //                     Search
// //                   </a>

// //                   <div className="flex items-center lg:ml-8">
// //                     {/* Help */}
// //                     <a
// //                       href="#"
// //                       className="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
// //                     >
// //                       <span className="sr-only">Help</span>
// //                       <QuestionMarkCircleIcon
// //                         aria-hidden="true"
// //                         className="h-6 w-6"
// //                       />
// //                     </a>
// //                     <a
// //                       href="#"
// //                       className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
// //                     >
// //                       Help
// //                     </a>

// //                     {/* Cart */}
// //                     <div className="ml-4 flow-root lg:ml-8">
// //                       <Link
// //                         href="/cart"
// //                         className="group -m-2 flex items-center p-2"
// //                       >
// //                         <ShoppingBagIcon
// //                           aria-hidden="true"
// //                           className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
// //                         />
// //                         <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
// //                           0
// //                         </span>
// //                         <span className="sr-only">items in cart, view bag</span>
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </nav>
// //       </header>
// //     </div>
// //   );
// // }
