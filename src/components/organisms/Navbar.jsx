import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import toggleMenu from "../../utils/toggleMenu";
import NavToggle from "../molecules/NavToggle";
import { useState } from "react";
import NavList from "../molecules/NavList";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" onClick={() => toggleMenu(isOpen, setIsOpen)} className="nav-link-logo">
          <img src={logo} alt="LOGO" className="nav-logo" />
        </Link>
        <NavList isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  )
}
