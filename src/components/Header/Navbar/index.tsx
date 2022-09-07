import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { LangContext } from "../../../context/langContext";
import "./index.scss";

const Navbar = () => {
  const { lang, setLang } = useContext(LangContext);

  return (
    <div className="navbar">
      <NavLink to="/naslovnica">
        {lang === "hr" ? "Naslovnica" : "Home"}
      </NavLink>
      <NavLink to="/galerija">{lang === "hr" ? "Galerija" : "Gallery"}</NavLink>
      <NavLink to="/kontakt">{lang === "hr" ? "Kontakt" : "Contact"}</NavLink>
    </div>
  );
};

export default Navbar;
