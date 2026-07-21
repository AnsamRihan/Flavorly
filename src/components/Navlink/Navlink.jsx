import React from 'react'
import { Link } from "react-router-dom";

export default function Navlink({mobile = false}) {
    
  const navLinks = [
    {
      name: "categories",
      path: "#",
    },
    {
      name: "collections",
      path: "#",
    },
    {
      name: "cookbooks",
      path: "#",
    },
    {
      name: "About Us",
      path: "/about",
    },
  ];

  return (
    <ul className={`
        ${mobile ? "flex flex-col items-start gap-3" : "flex gap-6 lg:gap-10" }
        font-semibold text-[15px]`}>

      {navLinks.map((link) => (
        <li key={link.name}>
            <Link to={link.path} className={mobile ? "sidebar-link" : "nav-link"}>
                {link.name}
            </Link>
        </li>
        ))}
    </ul>
  )
}
