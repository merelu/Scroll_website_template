import Footer from "@components/footer";
import HeroSection from "@components/HeroSection";
import InfoSection from "@components/InfoSection";
import Navbar from "@components/Navbar";
import ScrollToTop from "@components/ScrollToTop";
import Services from "@components/Services";
import Sidebar from "@components/Sidebar";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "@data/sectionData/infoSectionData";
import React, { useCallback, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} toggleHome={toggleHome} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer toggleHome={toggleHome} />
    </>
  );
}

export default Home;
