import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [buttonPopUp, setButtonPopUp] = useState(false)

  // for not scrolling window
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [showMenu]);

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
      const isClickOnBackground =
        e.target.classList.contains("background_black");
      const isClickOnNavBarList =
        e.target.classList.contains("ul.navBar--list show");
        

      if (showMenu && isClickOnBackground && !isClickOnNavBarList) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [showMenu]);

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
      <div className={`background_black ${isOpen}`}></div>
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
          <GiCancel className="menu-icon-cancel" onClick={toggleMenu} />
        ) : (
          <GiHamburgerMenu className="menu-icon" onClick={toggleMenu} />
        )}
        <ul
          className={`navBar--list ${showMenu ? "show" : ""}`}
        >
          <li onClick={closeMenu}>
            <Link to="/">Úvod</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/overview">Přehled slov</Link>
          </li>
          {/* <li onClick={closeMenu}>
            <Link to="/form">Formulář</Link>
          </li> */}
           <button
              className="navBar__PopContainer"
              onClick={() => setButtonPopUp(true)}
            >
              <div className="Pop--title">
                Přidat slovo
              </div>
              <div className="Pop--btn"></div>
            </button>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
