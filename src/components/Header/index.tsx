import Logo from "./Logo";
import Navbar from "./Navbar";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <Logo></Logo>
      </div>
      <div className="header-navbar">
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Header;
