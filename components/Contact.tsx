import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="relative py-0 bg-white lg:py-20">
      <div className="flex flex-col items-center justify-between px-10 mx-auto max-w-7xl xl:px-5 lg:flex-row">
        <div className="flex flex-col items-center w-full px-10 pt-5 pb-20 lg:pt-20 lg:flex-row">
          <div className="relative w-full max-w-md bg-cover lg:max-w-2xl lg:w-7/12">
            <div className="relative flex flex-col items-center justify-center w-full h-full lg:pr-10">
              <img src="https://cdn.devdojo.com/images/december2020/taxi-programming.png" />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
