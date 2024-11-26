import { NavLink } from "react-router-dom";
import toggleMenu from "../../utils/toggleMenu";
import NavLang from "./NavLang";

export default function NavList({isOpen,setIsOpen}) {
  return (
    <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li>
            <NavLink to="/" onClick={() => toggleMenu(isOpen, setIsOpen)} className={({isActive}) => isActive ? "nav-link-active nav-link" : "nav-link"}>Asosiy</NavLink>
        </li>
        <li>
            <NavLink to="about-sensors" onClick={() => toggleMenu(isOpen, setIsOpen)} className={({isActive}) => isActive ? "nav-link-active nav-link" : "nav-link"}>Datchiklar haqida</NavLink>
        </li>
        <li>
            <NavLink to="about-us" onClick={() => toggleMenu(isOpen, setIsOpen)} className={({isActive}) => isActive ? "nav-link-active nav-link" : "nav-link"}>Biz haqida</NavLink>
        </li>
        <li>
            <NavLink to="contact" onClick={() => toggleMenu(isOpen, setIsOpen)} className={({isActive}) => isActive ? "nav-link-active nav-link" : "nav-link"}>Aloqa</NavLink>
        </li>
        {/* <li>
            <NavLang />
        </li> */}
    </ul>
  )
}
