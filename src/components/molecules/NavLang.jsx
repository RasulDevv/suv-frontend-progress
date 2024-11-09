import { useState } from "react";
import handleLangChange from "../../utils/handleLangChange";

export default function NavLang() {
    const [selectedValue, setSelectedValue] = useState("uz")

  return (
    <select className="nav-lang-container" onChange={e => handleLangChange(e, setSelectedValue)}>
        <option value="uz" className="nav-lang">uz</option>
        <option value="ru" className="nav-lang">ru</option>
        <option value="en" className="nav-lang">en</option>
    </select>
  )
}
