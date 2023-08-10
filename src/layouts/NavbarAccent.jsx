import AccentLogo from "../assets/PerfumeryAccentLogo.svg";
import "../styles/NavbarAccent.css";
import { Link } from "react-router-dom";

const NavbarAccent = () => {
  return (
    <div className="shadow-sm text-center">
      <Link to="/">
        <img className="brand" src={AccentLogo} alt="" />
      </Link>
    </div>
  );
};

export default NavbarAccent;
