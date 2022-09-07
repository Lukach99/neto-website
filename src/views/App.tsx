import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import { LangContextProvider } from "../context/langContext";
import "./App.scss";

function App() {
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
      </div>
    </LangContextProvider>
  );
}

export default App;
