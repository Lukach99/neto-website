import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/naslovnica">Naslovnica</Link>
      <Link to="/kuhinje">Kuhinje</Link>
      <Link to="/ormari">Ormari</Link>
      <Link to="/spavacasoba">Spavaća soba</Link>
      <Link to="/kupaonica">Kupaonica</Link>
      <Link to="/onama">O nama</Link>
      <Link to="/kontakt">Kontakt</Link>
    </div>
  );
};

export default Navbar;
