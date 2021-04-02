import HeroSection from "@components/HeroSection";
import InfoSection from "@components/InfoSection";
import Navbar from "@components/Navbar";
import Services from "@components/Services";
import Sidebar from "@components/Sidebar";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "@data/sectionData/infoSectionData";
import React, { useCallback, useState } from "react";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);
  return (
    <>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Home;
