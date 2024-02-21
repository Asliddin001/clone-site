import React, { useState, useEffect } from "react";
import { Navbar } from "./components/navbar/navbar";
import { Header } from "./components/header/header";
import "./App.css";
import { News } from "./components/news/news";
import { Cakes } from "./components/cakes/cakes";


function App() {
  const [isTopVisible, setIsTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Header />
      <News />
      <Cakes />
      <div className="container relative">
        <div className="inner">
          <span></span>
          <p>Напишите нам</p>
        </div>
      </div>
      {isTopVisible && (
        <div className="scrolltop" onClick={scrollToTop}>
          <button>top</button>
        </div>
      )}
    </>
  );
}

export default App;
