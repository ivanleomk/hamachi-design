import React from "react";
import { FeatureType } from "../types/home";
import FeatureImage from "./FeatureImage";
import FeaturePoints from "./FeaturePoints";

type FeatureItemProp = {
  reversed: boolean;
  item: FeatureType;
};

const FeatureItem = ({ reversed, item }: FeatureItemProp) => {
  const { title, subtitle, image, points } = item;
  return (
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 my-20 text-black border-0 border-gray-300 border-solid md:flex-row  lg:px-16">
      <FeatureImage display={reversed} src={image} />
      <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
          {title}
        </h2>
        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
          {subtitle}
        </p>
        <FeaturePoints points={points} />
      </div>
      <FeatureImage display={!reversed} src={image} />
    </div>
  );
};

export default FeatureItem;
