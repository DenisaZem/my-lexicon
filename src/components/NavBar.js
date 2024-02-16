import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isOpen = showMenu ? "open" : "";

  return (
    <div>
      <div className={`background ${isOpen}`}></div>
      <nav className="navBar">
        <Link to="/">
          <img
            src="https://img.freepik.com/free-vector/online-education-cartoon-concept-with-people-learning-online-vector-illustration_1284-84460.jpg?w=1380&t=st=1703592219~exp=1703592819~hmac=fe62f9ff88493f74888e4fb2a22f0425f10da0d31cd47180961cf14ea001a4d9"
            alt="icon"
            className="navBar--img_logo"
          />
        </Link>
        {showMenu ? (
          <GiCancel className="menu-icon" onClick={toggleMenu} />
        ) : (
          <GiHamburgerMenu className="menu-icon" onClick={toggleMenu} />
        )}
        <ul className={`navBar--list ${showMenu ? "show" : ""}`}>
          <li>
            <Link to="/">Úvod</Link>
          </li>
          <li>
            <Link to="/overview">Přehled slov</Link>
          </li>
          <li>
            <Link to="/form">Formulář</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
