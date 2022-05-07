import React from "react";

const Introduction = () => {
  return (
    <section className="w-full px-8 py-10 bg-white xl:px-0">
      <div className="relative w-full px-5 mx-auto leading-7 text-gray-900 max-w-6xl lg:px-16 xl:px-32">
        <p className="mb-2 font-medium text-black uppercase">Who are we?</p>
        <div className="flex flex-col md:flex-row">
          <div className="w-full mt-5 ">
            <h3 className="mb-5 -mt-1 text-3xl font-bold leading-tight sm:text-4xl">
              We&apos;re a digital first web agency here to make a difference
            </h3>
            <p>
              Establishing a digital presence has never been more easy yet more
              vital at the same time.{" "}
              <span className="text-lg underline">
                Why wait any longer to bring that amazing idea to life?
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
