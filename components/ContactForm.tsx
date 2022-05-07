import React, { useState } from "react";
import { toast } from "react-toastify";
import ContactFormInput from "./ContactFormInput";

import ContactFormSubmitButton from "./ContactFormSubmitButton";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    const userConfirmationPromise = fetch(
      `${window.location.origin}/api/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );
    const backendEmail = fetch(`${window.location.origin}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email: "sales@hamachi-design.com",
        message,
      }),
    });

    Promise.all([userConfirmationPromise, backendEmail])
      .then((res) => {
        console.log(res);
        toast("Succesfully sent message!");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error sending message");
      });
  };

  return (
    <div className="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
      <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
        <h4 className="w-full font-serif text-4xl font-medium leading-snug">
          Get in Touch
        </h4>
        <p>
          Got an idea you want to bring to life? Fill in your details below for
          a quick 30-mins exploratory call so we can explore how we can help
          you.
        </p>
        <div className="relative w-full mt-6 space-y-8">
          <ContactFormInput
            label="Name"
            placeholder="John Doe"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <ContactFormInput
            label="Email"
            placeholder="johndoe@email.xyz"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <ContactFormInput
            label="Message"
            placeholder="I've got a great idea that I want to bring to life! Where do we start?"
            type="textarea"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <ContactFormSubmitButton loading={loading} onClick={handleSubmit} />
        </div>
      </div>
      <svg
        className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-gray-200 fill-current"
        viewBox="0 0 91 91"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
          <g fillRule="nonzero">
            <g>
              <g>
                <circle cx="3.261" cy="3.445" r="2.72"></circle>
                <circle cx="15.296" cy="3.445" r="2.719"></circle>
                <circle cx="27.333" cy="3.445" r="2.72"></circle>
                <circle cx="39.369" cy="3.445" r="2.72"></circle>
                <circle cx="51.405" cy="3.445" r="2.72"></circle>
                <circle cx="63.441" cy="3.445" r="2.72"></circle>
                <circle cx="75.479" cy="3.445" r="2.72"></circle>
                <circle cx="87.514" cy="3.445" r="2.719"></circle>
              </g>
              <g transform="translate(0 12)">
                <circle cx="3.261" cy="3.525" r="2.72"></circle>
                <circle cx="15.296" cy="3.525" r="2.719"></circle>
                <circle cx="27.333" cy="3.525" r="2.72"></circle>
                <circle cx="39.369" cy="3.525" r="2.72"></circle>
                <circle cx="51.405" cy="3.525" r="2.72"></circle>
                <circle cx="63.441" cy="3.525" r="2.72"></circle>
                <circle cx="75.479" cy="3.525" r="2.72"></circle>
                <circle cx="87.514" cy="3.525" r="2.719"></circle>
              </g>
              <g transform="translate(0 24)">
                <circle cx="3.261" cy="3.605" r="2.72"></circle>
                <circle cx="15.296" cy="3.605" r="2.719"></circle>
                <circle cx="27.333" cy="3.605" r="2.72"></circle>
                <circle cx="39.369" cy="3.605" r="2.72"></circle>
                <circle cx="51.405" cy="3.605" r="2.72"></circle>
                <circle cx="63.441" cy="3.605" r="2.72"></circle>
                <circle cx="75.479" cy="3.605" r="2.72"></circle>
                <circle cx="87.514" cy="3.605" r="2.719"></circle>
              </g>
              <g transform="translate(0 36)">
                <circle cx="3.261" cy="3.686" r="2.72"></circle>
                <circle cx="15.296" cy="3.686" r="2.719"></circle>
                <circle cx="27.333" cy="3.686" r="2.72"></circle>
                <circle cx="39.369" cy="3.686" r="2.72"></circle>
                <circle cx="51.405" cy="3.686" r="2.72"></circle>
                <circle cx="63.441" cy="3.686" r="2.72"></circle>
                <circle cx="75.479" cy="3.686" r="2.72"></circle>
                <circle cx="87.514" cy="3.686" r="2.719"></circle>
              </g>
              <g transform="translate(0 49)">
                <circle cx="3.261" cy="2.767" r="2.72"></circle>
                <circle cx="15.296" cy="2.767" r="2.719"></circle>
                <circle cx="27.333" cy="2.767" r="2.72"></circle>
                <circle cx="39.369" cy="2.767" r="2.72"></circle>
                <circle cx="51.405" cy="2.767" r="2.72"></circle>
                <circle cx="63.441" cy="2.767" r="2.72"></circle>
                <circle cx="75.479" cy="2.767" r="2.72"></circle>
                <circle cx="87.514" cy="2.767" r="2.719"></circle>
              </g>
              <g transform="translate(0 61)">
                <circle cx="3.261" cy="2.846" r="2.72"></circle>
                <circle cx="15.296" cy="2.846" r="2.719"></circle>
                <circle cx="27.333" cy="2.846" r="2.72"></circle>
                <circle cx="39.369" cy="2.846" r="2.72"></circle>
                <circle cx="51.405" cy="2.846" r="2.72"></circle>
                <circle cx="63.441" cy="2.846" r="2.72"></circle>
                <circle cx="75.479" cy="2.846" r="2.72"></circle>
                <circle cx="87.514" cy="2.846" r="2.719"></circle>
              </g>
              <g transform="translate(0 73)">
                <circle cx="3.261" cy="2.926" r="2.72"></circle>
                <circle cx="15.296" cy="2.926" r="2.719"></circle>
                <circle cx="27.333" cy="2.926" r="2.72"></circle>
                <circle cx="39.369" cy="2.926" r="2.72"></circle>
                <circle cx="51.405" cy="2.926" r="2.72"></circle>
                <circle cx="63.441" cy="2.926" r="2.72"></circle>
                <circle cx="75.479" cy="2.926" r="2.72"></circle>
                <circle cx="87.514" cy="2.926" r="2.719"></circle>
              </g>
              <g transform="translate(0 85)">
                <circle cx="3.261" cy="3.006" r="2.72"></circle>
                <circle cx="15.296" cy="3.006" r="2.719"></circle>
                <circle cx="27.333" cy="3.006" r="2.72"></circle>
                <circle cx="39.369" cy="3.006" r="2.72"></circle>
                <circle cx="51.405" cy="3.006" r="2.72"></circle>
                <circle cx="63.441" cy="3.006" r="2.72"></circle>
                <circle cx="75.479" cy="3.006" r="2.72"></circle>
                <circle cx="87.514" cy="3.006" r="2.719"></circle>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg
        className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-yellow-400 fill-current"
        viewBox="0 0 91 91"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
          <g fillRule="nonzero">
            <g>
              <g>
                <circle cx="3.261" cy="3.445" r="2.72"></circle>
                <circle cx="15.296" cy="3.445" r="2.719"></circle>
                <circle cx="27.333" cy="3.445" r="2.72"></circle>
                <circle cx="39.369" cy="3.445" r="2.72"></circle>
                <circle cx="51.405" cy="3.445" r="2.72"></circle>
                <circle cx="63.441" cy="3.445" r="2.72"></circle>
                <circle cx="75.479" cy="3.445" r="2.72"></circle>
                <circle cx="87.514" cy="3.445" r="2.719"></circle>
              </g>
              <g transform="translate(0 12)">
                <circle cx="3.261" cy="3.525" r="2.72"></circle>
                <circle cx="15.296" cy="3.525" r="2.719"></circle>
                <circle cx="27.333" cy="3.525" r="2.72"></circle>
                <circle cx="39.369" cy="3.525" r="2.72"></circle>
                <circle cx="51.405" cy="3.525" r="2.72"></circle>
                <circle cx="63.441" cy="3.525" r="2.72"></circle>
                <circle cx="75.479" cy="3.525" r="2.72"></circle>
                <circle cx="87.514" cy="3.525" r="2.719"></circle>
              </g>
              <g transform="translate(0 24)">
                <circle cx="3.261" cy="3.605" r="2.72"></circle>
                <circle cx="15.296" cy="3.605" r="2.719"></circle>
                <circle cx="27.333" cy="3.605" r="2.72"></circle>
                <circle cx="39.369" cy="3.605" r="2.72"></circle>
                <circle cx="51.405" cy="3.605" r="2.72"></circle>
                <circle cx="63.441" cy="3.605" r="2.72"></circle>
                <circle cx="75.479" cy="3.605" r="2.72"></circle>
                <circle cx="87.514" cy="3.605" r="2.719"></circle>
              </g>
              <g transform="translate(0 36)">
                <circle cx="3.261" cy="3.686" r="2.72"></circle>
                <circle cx="15.296" cy="3.686" r="2.719"></circle>
                <circle cx="27.333" cy="3.686" r="2.72"></circle>
                <circle cx="39.369" cy="3.686" r="2.72"></circle>
                <circle cx="51.405" cy="3.686" r="2.72"></circle>
                <circle cx="63.441" cy="3.686" r="2.72"></circle>
                <circle cx="75.479" cy="3.686" r="2.72"></circle>
                <circle cx="87.514" cy="3.686" r="2.719"></circle>
              </g>
              <g transform="translate(0 49)">
                <circle cx="3.261" cy="2.767" r="2.72"></circle>
                <circle cx="15.296" cy="2.767" r="2.719"></circle>
                <circle cx="27.333" cy="2.767" r="2.72"></circle>
                <circle cx="39.369" cy="2.767" r="2.72"></circle>
                <circle cx="51.405" cy="2.767" r="2.72"></circle>
                <circle cx="63.441" cy="2.767" r="2.72"></circle>
                <circle cx="75.479" cy="2.767" r="2.72"></circle>
                <circle cx="87.514" cy="2.767" r="2.719"></circle>
              </g>
              <g transform="translate(0 61)">
                <circle cx="3.261" cy="2.846" r="2.72"></circle>
                <circle cx="15.296" cy="2.846" r="2.719"></circle>
                <circle cx="27.333" cy="2.846" r="2.72"></circle>
                <circle cx="39.369" cy="2.846" r="2.72"></circle>
                <circle cx="51.405" cy="2.846" r="2.72"></circle>
                <circle cx="63.441" cy="2.846" r="2.72"></circle>
                <circle cx="75.479" cy="2.846" r="2.72"></circle>
                <circle cx="87.514" cy="2.846" r="2.719"></circle>
              </g>
              <g transform="translate(0 73)">
                <circle cx="3.261" cy="2.926" r="2.72"></circle>
                <circle cx="15.296" cy="2.926" r="2.719"></circle>
                <circle cx="27.333" cy="2.926" r="2.72"></circle>
                <circle cx="39.369" cy="2.926" r="2.72"></circle>
                <circle cx="51.405" cy="2.926" r="2.72"></circle>
                <circle cx="63.441" cy="2.926" r="2.72"></circle>
                <circle cx="75.479" cy="2.926" r="2.72"></circle>
                <circle cx="87.514" cy="2.926" r="2.719"></circle>
              </g>
              <g transform="translate(0 85)">
                <circle cx="3.261" cy="3.006" r="2.72"></circle>
                <circle cx="15.296" cy="3.006" r="2.719"></circle>
                <circle cx="27.333" cy="3.006" r="2.72"></circle>
                <circle cx="39.369" cy="3.006" r="2.72"></circle>
                <circle cx="51.405" cy="3.006" r="2.72"></circle>
                <circle cx="63.441" cy="3.006" r="2.72"></circle>
                <circle cx="75.479" cy="3.006" r="2.72"></circle>
                <circle cx="87.514" cy="3.006" r="2.719"></circle>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default ContactForm;
