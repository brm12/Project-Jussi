import React from "react";

import Header from "../../components/header";
import MainBanner from "../../components/mainBanner";
import LogoBar from "../../components/logoBar";
import OurSolution from "../../components/ourSolution";
import { AppContextProvider } from "../../productFetch";
import Footer from "../../components/footer";
import Newsletter from "../../components/newsletter";
import Contact from "../../components/contact";
import About from "../../components/about";

const Home = () => {
  return (
    <>
      <AppContextProvider>
        <Header />
        <MainBanner />
        <LogoBar />
        <OurSolution />
        <About />
        <Contact />
        <Newsletter />
        <Footer />
      </AppContextProvider>
    </>
  );
};

export default Home;
