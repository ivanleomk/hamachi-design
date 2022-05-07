import React from "react";
import { FooterLinkItem } from "../types/home";
import NextLink from "next/link";

type FooterLinkProps = {
  item: FooterLinkItem;
};

const FooterLink = ({ item }: FooterLinkProps) => {
  return (
    <li>
      <NextLink href={item.path} passHref>
        <p className="px-2 text-gray-500 hover:text-gray-600">{item.title}</p>
      </NextLink>
    </li>
  );
};

export default FooterLink;
