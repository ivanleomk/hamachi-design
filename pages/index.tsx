import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
