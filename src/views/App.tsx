import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
          {/* <Route path="/kontakt" element={<SignUp />} /> */}
        </Routes>

        <Footer></Footer>
        <button
          onClick={scrollToTop}
          className="app-btn-gotop"
          style={{ display: visible ? "inline" : "none" }}
        >
          {">>"}
        </button>
      </div>
    </LangContextProvider>
  );
}

export default App;
