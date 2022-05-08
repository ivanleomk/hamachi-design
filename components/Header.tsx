import Link from "next/link";
import React from "react";
import { HeaderLinkItem } from "../types/home";
import HeaderLink from "./HeaderLink";

const HeaderItems: HeaderLinkItem[] = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
];

const Header = () => {
  return (
    <section className="relative bg-white">
      <div className="flex items-center justify-between h-24 px-8 mx-auto max-w-7xl">
        <Link href="/" passHref>
          <p className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
            Hamachi Design.
          </p>
        </Link>
        <nav className="items-center justify-center hidden space-x-8 text-gray-200 md:flex">
          {HeaderItems.map((headerItem) => {
            return <HeaderLink key={headerItem.path} {...headerItem} />;
          })}
        </nav>
      </div>
    </section>
  );
};

export default Header;
