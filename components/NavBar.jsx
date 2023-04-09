import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Search", href: "/search" },
  { text: "Sale", href: "/search?purpose=for-sale" },
  { text: "Rent", href: "/search?purpose=for-rent" },
  { text: "AI", href: "/dalle" },
  { text: "Profile", href: "/profile" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link legacyBehavior href={"/"}>
          <a>
            <Image className="logo" src={logo} />
          </a>
        </Link>
        <div onClick={() => setNavActive(!navActive)} className={`nav__menu-bar`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;