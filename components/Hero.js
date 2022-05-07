import React from "react";

const Hero = () => {
  return (
    <section className="block py-24 leading-7 text-left text-gray-900 bg-white">
      <div className="relative w-full px-5 px-8 mx-auto leading-7 text-gray-900 max-w-6xl lg:px-16 xl:px-32">
        <div className="flex flex-col flex-wrap items-center text-left md:flex-row">
          <div className="flex-1 opacity-100 xl:pr-12 transform-none">
            <h1 className="box-border mt-0 text-4xl font-normal tracking-tight text-center text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl mb-7 md:text-left">
              {"We're"} <span className="text-blue-600">Hamachi Design</span>
            </h1>

            <p className="box-border mt-0 mb-8 text-base font-normal text-center text-gray-500 lg:text-xl md:text-left lg:mb-8">
              and we love building beautiful user experiences for the everyday
              user
            </p>
          </div>

          <div className="relative flex justify-center flex-1 w-full px-5 mt-16 leading-7 text-gray-900 md:justify-end md:mt-0">
            <img
              src="https://cdn.devdojo.com/images/november2020/welcome.png"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
