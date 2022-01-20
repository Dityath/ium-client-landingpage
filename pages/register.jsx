import React from "react";
import Footer from "../components/global/footer";
import Navbar from "../components/global/navbar";
import Seo from "../components/seo";
import Section1 from "../components/pages/register/section1";

const Register = () => {
  return (
    <>
      <Seo />
      <Navbar />
      <Section1 />
      <Footer />
    </>
  );
};

export default Register;
