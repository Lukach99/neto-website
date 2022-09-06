import { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../../../context/langContext";
import "./index.scss";

const Navbar = () => {
  const { lang, setLang } = useContext(LangContext);

  return (
    <div className="navbar">
      <Link to="/naslovnica">{lang === "hr" ? "Naslovnica" : "Home"}</Link>
      <Link to="/galerija">{lang === "hr" ? "Galerija" : "Gallery"}</Link>
      <Link to="/kontakt">{lang === "hr" ? "Kontakt" : "Contact"}</Link>
    </div>
  );
};

export default Navbar;
