import React from "react";

type FeaturePointsProp = {
  points: string[];
};

const FeaturePoints = ({ points }: FeaturePointsProp) => {
  return (
    <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
      {points.map((item) => {
        return (
          <li
            key={item}
            className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
          >
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default FeaturePoints;
