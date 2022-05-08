import React from "react";
import NextLink from "next/link";
import { HeaderLinkItem } from "../types/home";

const HeaderLink = ({ path, title }: HeaderLinkItem) => {
  return (
    <NextLink href={path} passHref>
      <div className="relative inline-block text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900 cursor-pointer">
        <span className="block">{title}</span>
        <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
          <span className="absolute inset-0 inline-block w-full h-full transform border-t-2 border-blue-600"></span>
        </span>
      </div>
    </NextLink>
  );
};

export default HeaderLink;
