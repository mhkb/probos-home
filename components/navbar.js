import Link from "next/link";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [
    { title: "Our Flagship", link: "#propkeeper" },
    { title: "Product Studio", link: "#studio" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-0 text-3xl font-bold text-white tracking-tight">
                    <span>Probos Technology</span>
                    <span className="text-probos-green">.</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-400 rounded-md lg:hidden hover:text-probos-green focus:text-probos-green focus:bg-slate-800 focus:outline-none">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.link} className="w-full px-4 py-2 -ml-4 text-gray-300 rounded-md hover:text-probos-green focus:text-probos-green focus:bg-slate-800 focus:outline-none">
                          {item.title}
                      </Link>
                    ))}
                    <Link href="https://propkeeper.app" className="w-full px-6 py-2 mt-3 text-center text-white bg-probos-green rounded-3xl lg:ml-5 font-semibold">         
                        Discover PropKeeper
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.link} className="inline-block px-4 py-2 text-lg font-normal text-gray-300 no-underline rounded-md hover:text-probos-green focus:text-probos-green focus:bg-slate-800 focus:outline-none transition-colors">
                    {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="https://propkeeper.app" className="px-8 py-3 text-white bg-probos-green rounded-3xl md:ml-5 font-bold hover:brightness-110 transition-all">
              Discover PropKeeper
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
