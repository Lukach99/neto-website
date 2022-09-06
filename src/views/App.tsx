import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { LangContextProvider } from "../context/langContext";
import "./App.scss";

function App() {
  return (
    <LangContextProvider>
      <div className="App">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </LangContextProvider>
  );
}

export default App;
