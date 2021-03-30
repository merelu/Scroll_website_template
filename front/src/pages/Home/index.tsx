import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
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
    </>
  );
}

export default Home;
