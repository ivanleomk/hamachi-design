import React from "react";
import { FooterLinkItem } from "../types/home";
import FooterLink from "./FooterLink";

const FooterItems: FooterLinkItem[] = [
  {
    title: "About",
    path: "/about",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
];

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="px-10 mx-auto max-w-7xl">
        <div className="flex flex-col justify-between mt-5 mb-5 text-center sm:mb-0 sm:mt-12 sm:flex-row">
          <ul className="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm font-bold">
            {FooterItems.map((item) => {
              return <FooterLink key={item.title} item={item} />;
            })}
          </ul>
          <p className="mt-3 text-xs leading-tight text-gray-500 sm:mt-0">
            {" "}
            Hamachi Design © Copyright 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
