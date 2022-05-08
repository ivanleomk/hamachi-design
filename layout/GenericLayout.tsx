import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const GenericLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default GenericLayout;
