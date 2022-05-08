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
    <div className="relative z-10 w-full max-w-2xl mt-20 ">
      <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
        <h4 className="w-full font-serif text-4xl font-medium leading-snug">
          Get in Touch
        </h4>
        <p>
          Got an idea you want to bring to life? Fill in your details below for
          a quick 30-mins exploratory call so we can explore how we can help
          you.
        </p>
        <p className="mt-4">
          You can also email us directly at{" "}
          <span className="underline">sales@hamachi-design.com</span>
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
    </div>
  );
};

export default ContactForm;
