import { useContext } from "react";
import { LangContext } from "../../../context/langContext";
import "./index.scss";

const About = () => {
  const { lang, setLang } = useContext(LangContext);
  return (
    <div className="about">
      <p className="about-text">
        {lang === "hr"
          ? `NETO je tvrtka nastala 2014. godine specijalizirana za dizajniranje 
        montažu namještaja po mjeri. Kontinuirano praćenje modernih trendova i
        praksi pomaže da naše stručno osoblje pretvori Vaš prostor iz snova u
        stvarnost.`
          : "NETO is a company founded in 2014 specializing in the design and assembly of custom-made furniture. Continuous monitoring of modern trends and practices helps our professional staff turn your dream space into reality."}
      </p>
    </div>
  );
};

export default About;
