import React from "react";
import NextImage from "next/image";

type FeatureImageProp = {
  display: boolean;
  src: string;
};

const FeatureImage = ({ display, src }) => {
  if (!display) {
    return null;
  }

  return (
    <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
      <NextImage src={src} width={300} height={300} />
    </div>
  );
};

export default FeatureImage;
