import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to={"/naslovnica"}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/neto-website.appspot.com/o/neto-logo-novi.png?alt=media&token=5a84936f-303a-4b76-a6c8-c0950fb6d8df"
          alt="logo"
          style={{ width: 200, height: 100 }}
        />
      </Link>
    </div>
  );
};

export default Logo;
