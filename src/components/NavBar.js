import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

// for not scrolling window
  if (showMenu) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // for closing menu after page redirect
  const closeMenu = useCallback(() => {
    setShowMenu(false);
  }, []);

  // for closing menu after click outside of NavBar--list
  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (
        showMenu &&
        (e.target.closest(".navBar") === null ||
          e.target.closest(".background"))
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, []);

  // for closing menu after width window change
  useEffect(() => {
    const closeMenuOnResize = () => {
      setShowMenu(false);
    };

    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, [showMenu]);

  // for show .backround
  const isOpen = showMenu ? "open" : "";

  return (
    <div>
      <div className={`background ${isOpen}`} onClick={toggleMenu}></div>
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
        <ul
          onClick={closeMenu}
          className={`navBar--list ${showMenu ? "show" : ""}`}
        >
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
