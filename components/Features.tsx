import React from "react";
import { FeatureType } from "../types/home";
import FeatureItem from "./Featureitem";

const features: FeatureType[] = [
  {
    title: "Designs that help you tell your story.",
    subtitle:
      "We design all our websites from the ground up so that it tells your story the way it deserves to be.",
    image: "https://cdn.devdojo.com/images/december2020/productivity.png",
    points: [
      "Lightning Fast Web Sites",
      "Reponsive for all screen sizes",
      "Customized design for your business",
    ],
  },
  {
    title: "Comprehensive Support",
    subtitle:
      "From SEO to copywriting and even custom development tools, we're here to support you through it all",
    image: "https://cdn.devdojo.com/images/december2020/settings.png",
    points: [
      "SEO Consulting to optimize conversions",
      "Custom tooling avaliable for your project",
      "Copywriting and content plan",
    ],
  },
];

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pb-7 ">
      <section className="max-w-6xl bg-white  md:pb-24">
        {features.map((feature, index) => {
          return (
            <FeatureItem
              reversed={index % 2 === 0}
              item={feature}
              key={feature.title}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Features;
