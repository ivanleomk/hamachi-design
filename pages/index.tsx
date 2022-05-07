import Head from "next/head";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Feature2 from "../components/Features";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      {/* <Feature /> */}
      <Feature2 />
      <Testimonials />
      <ContactForm />
    </>
  );
}
