import React from "react";
import ContactForm from "./ContactForm";

const AboutContainer = () => {
  return (
    <div className="relative bg-white max-w-7xl ">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Work with us
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Process
            </h3>
            <p className="mt-8 text-lg text-gray-500">
              We&apos;re always excited to bring our special touch to different
              projects
            </p>
            <div className="mt-5 prose prose-indigo text-gray-500">
              <p>
                We always start off with a quick exploratory call to see if we
                might be a good fit. We understand that our design choices and
                method might not work for everyone and that&apos;s ok.{" "}
              </p>
              <p>
                Once we&apos;ve got that out of the way, we then proceed to do a
                quick audit of your existing SEO strategies and online presence,
                checking to see how your competitors are doing.
              </p>
              <p>
                Once we&apos;ve gotten a clear industry of where you stand
                relative to your competitors, we then proceed to design a new
                SEO strategy for you to be able to get the most out of our work.
                This could include
              </p>
              <ul role="list">
                <li>
                  Planning out a quick content calendar to become an authority
                  in your field
                </li>
                <li>
                  Creating a new website that is optimized for search engines
                  like google
                </li>
                <li>
                  Working on new methods to help you convert clients faster and
                  better
                </li>
              </ul>
              <p>
                Ultimately we&apos;d like to make sure that you are benefitting
                from our time together and will go the extra mile to ensure that
                happens.
              </p>
              <h3>How we’re different</h3>
              <p>
                Traditional web agencies today still build websites using
                outdated technologies like wordpress and JQuery while charging a
                large premium for them. We don&apos;t think that&apos;s right
                since the websites they build are not only slow but also causing
                you to lose out in potential revenue.
              </p>
              <p>
                At Hamachi Design, we&apos;re a small team of engineers and data
                scientists that are using the latest technologies to help you
                beat the pack. In today&apos;s fast paced world, even a split
                second delay could cause up to 20% drops in customer
                conversions. That&apos;s why we write all our code from scratch
                to ensure your customers get the best experience possible.
              </p>
              <p>
                Curious about how we can help you? Sign up today for a quick
                consult today.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
