import Logo from "./Logo";
import Navbar from "./Navbar";
import "./index.scss";
import LangChoice from "./LangChoice";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <Logo></Logo>
      </div>
      <div className="header-navbar">
        <Navbar></Navbar>
      </div>
      <div className="header-lang">
        <LangChoice></LangChoice>
      </div>
    </div>
  );
};

export default Header;
