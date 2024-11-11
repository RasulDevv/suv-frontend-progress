import { useState } from "react";
import handleLangChange from "../../utils/handleLangChange";

export default function NavLang() {
    const [selectedValue, setSelectedValue] = useState("uz")

  return (
    <select className="nav-lang-container" onChange={e => handleLangChange(e, setSelectedValue)}>
        <option value="uz" className="nav-lang">O'zbekcha</option>
        <option value="ru" className="nav-lang">Русcкий</option>
        <option value="en" className="nav-lang">English</option>
    </select>
  )
}
