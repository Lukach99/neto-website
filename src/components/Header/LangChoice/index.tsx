import { useContext, useState } from "react";
import { LangContext } from "../../../context/langContext";
import "./index.scss";

const LangChoice = () => {
  const [activeClassHr, setActiveClassHr] = useState("active");
  const [activeClassEng, setActiveClassEng] = useState("");
  const langContext = useContext(LangContext);

  const langHandlerHr = () => {
    langContext.setLang("hr");
    setActiveClassEng("");
    setActiveClassHr("active");
  };

  const langHandlerEng = () => {
    langContext.setLang("eng");
    setActiveClassEng("active");
    setActiveClassHr("");
  };

  return (
    <div className="lang">
      <button className={`lang-btn ${activeClassHr}`} onClick={langHandlerHr}>
        HR
      </button>
      <p>/</p>
      <button className={`lang-btn ${activeClassEng}`} onClick={langHandlerEng}>
        ENG
      </button>
    </div>
  );
};

export default LangChoice;
