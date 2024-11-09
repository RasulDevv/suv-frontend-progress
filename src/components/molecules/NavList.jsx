import { NavLink } from "react-router-dom";
import toggleMenu from "../../utils/toggleMenu";
import NavLang from "./NavLang";

export default function NavList({isOpen,setIsOpen}) {
  return (
    <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li>
            <NavLink to="/" onClick={() => toggleMenu(isOpen, setIsOpen)} className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>Home</NavLink>
        </li>
        <li>
            <NavLink to="about-sensors" onClick={() => toggleMenu(isOpen, setIsOpen)} className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>About Sensors</NavLink>
        </li>
        <li>
            <NavLink to="about-us" onClick={() => toggleMenu(isOpen, setIsOpen)} className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>About Us</NavLink>
        </li>
        <li>
            <NavLink to="contact" onClick={() => toggleMenu(isOpen, setIsOpen)} className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>Contact</NavLink>
        </li>
        <li>
            <NavLang />
        </li>
    </ul>
  )
}
