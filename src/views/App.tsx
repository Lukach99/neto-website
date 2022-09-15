import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import { LangContextProvider } from "../context/langContext";
import "./App.scss";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    console.log("clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <LangContextProvider>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="*" element={<Navigate to="/naslovnica" replace />} />
          <Route path="/naslovnica" element={<MainPage />} />
          <Route path="/galerija" element={<Gallery />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>

        <Footer></Footer>
        <button
          onClick={scrollToTop}
          className="app-btn-gotop"
          style={{ display: visible ? "inline" : "none" }}
        >
          <FontAwesomeIcon icon={faAnglesUp} />
        </button>
      </div>
    </LangContextProvider>
  );
}

export default App;
