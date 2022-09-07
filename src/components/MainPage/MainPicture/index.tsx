import { useContext } from "react";
import { LangContext } from "../../../context/langContext";
import "./index.scss";

const MainPicture = () => {
  const { lang, setLang } = useContext(LangContext);
  return (
    <div className="main-picture">
      <h1 className="main-picture-h1">
        {lang === "hr" ? "Namještaj po mjeri" : "Custom made furniture"}
      </h1>
    </div>
  );
};

export default MainPicture;
