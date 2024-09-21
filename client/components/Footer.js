import Link from "next/link";
import { GiMountaintop } from "react-icons/gi";

const footerNavigation = {
  products: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-50">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-20">
          <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
            {/* Image section */}
            <div className="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
              <Link href="/">
                <span className="sr-only">Summit Gear Co.</span>
                <GiMountaintop className="h-12 w-12 bg-sky-600 text-white rounded-full" />
              </Link>
            </div>

            {/* Sitemap sections */}
            <div className="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
              <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Products
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.products.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Company</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Customer Service
                </h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.customerService.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter section */}
            <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
              <h3 className="text-sm font-medium text-gray-900">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-gray-500">
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  required
                  autoComplete="email"
                  className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-10 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2021 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// const footerNavigation = {
//   shop: [
//     { name: "Bags", href: "#" },
//     { name: "Tees", href: "#" },
//     { name: "Objects", href: "#" },
//     { name: "Home Goods", href: "#" },
//     { name: "Accessories", href: "#" },
//   ],
//   company: [
//     { name: "Who we are", href: "#" },
//     { name: "Sustainability", href: "#" },
//     { name: "Press", href: "#" },
//     { name: "Careers", href: "#" },
//     { name: "Terms & Conditions", href: "#" },
//     { name: "Privacy", href: "#" },
//   ],
//   account: [
//     { name: "Manage Account", href: "#" },
//     { name: "Returns & Exchanges", href: "#" },
//     { name: "Redeem a Gift Card", href: "#" },
//   ],
//   connect: [
//     { name: "Contact Us", href: "#" },
//     { name: "Facebook", href: "#" },
//     { name: "Instagram", href: "#" },
//     { name: "Pinterest", href: "#" },
//   ],
// };

// export default function Footer() {
//   return (
//     <footer
//       aria-labelledby="footer-heading"
//       className="bg-white dark:bg-gray-900"
//     >
//       <h2 id="footer-heading" className="sr-only">
//         Footer
//       </h2>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
//           <div className="grid grid-cols-2 gap-8 xl:col-span-2">
//             <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
//               <div>
//                 <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
//                   Shop
//                 </h3>
//                 <ul className="mt-6 space-y-6">
//                   {footerNavigation.shop.map((item) => (
//                     <li key={item.name} className="text-sm">
//                       <a
//                         href={item.href}
//                         className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
//                       >
//                         {item.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
//                   Company
//                 </h3>
//                 <ul className="mt-6 space-y-6">
//                   {footerNavigation.company.map((item) => (
//                     <li key={item.name} className="text-sm">
//                       <a
//                         href={item.href}
//                         className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
//                       >
//                         {item.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
//               <div>
//                 <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
//                   Account
//                 </h3>
//                 <ul className="mt-6 space-y-6">
//                   {footerNavigation.account.map((item) => (
//                     <li key={item.name} className="text-sm">
//                       <a
//                         href={item.href}
//                         className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
//                       >
//                         {item.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
//                   Connect
//                 </h3>
//                 <ul className="mt-6 space-y-6">
//                   {footerNavigation.connect.map((item) => (
//                     <li key={item.name} className="text-sm">
//                       <a
//                         href={item.href}
//                         className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
//                       >
//                         {item.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="mt-16 md:mt-16 xl:mt-0">
//             <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
//               Sign up for our newsletter
//             </h3>
//             <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
//               The latest deals and savings, sent to your inbox weekly.
//             </p>
//             <form className="mt-2 flex sm:max-w-md">
//               <label htmlFor="email-address" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email-address"
//                 type="text"
//                 required
//                 autoComplete="email"
//                 className="w-full min-w-0 appearance-none rounded-md border border-gray-300 dark:border-gray-700 bg-white px-4 py-2 text-base text-sky-700 placeholder-gray-500 shadow-sm focus:border-sky-700 focus:outline-none focus:ring-1 focus:ring-sky-700"
//               />
//               <div className="ml-4 flex-shrink-0">
//                 <button
//                   type="submit"
//                   className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2"
//                 >
//                   Sign up
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         <div className="border-t border-gray-200 dark:border-gray-700 py-10">
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             Copyright &copy; 2021 Your Company, Inc.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
