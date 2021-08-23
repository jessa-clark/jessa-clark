import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { verify } from "../../Services/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

function Nav() {
  const [userExists, setUserExists] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const checkSigned = async () => {
      const valid = await verify();
      setUserExists(valid ? true : false);
    };
    checkSigned();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // if we're at desktop size
      if (window.innerWidth > 425) {
        // untoggle the hamburger menu
        setShowMenu(false);
        setHamburger(false);
      }
    };
    handleResize();
    // add an event listener to the resize event on the window
    window.addEventListener("resize", handleResize);
    // unmounts we'll remove that event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <FontAwesomeIcon
        className={showMenu ? `fa-times` : `fa-bars`}
        icon={showMenu ? faTimes : faBars}
        onClick={() => setShowMenu(!showMenu)}
      />
      <nav className={hamburger ? "active" : null}>
        <div className="navbar-right-container">
          <div id="hamburger-div">
            {hamburger ? (
              <div
                id="close-hamburger"
                onClick={() => setHamburger(!hamburger)}
              >
                X
              </div>
            ) : (
              <i
                className="fa fa-bars"
                id="hamburger-logo"
                onClick={() => setHamburger(!hamburger)}
              ></i>
            )}
          </div>
          {showMenu ? <div className="mobile-navbar-right-container"
            style={{ display: showMenu || hamburger ? "flex" : "none" }}
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            {userExists ? (
              <>
                <Link to="/admin" className="nav-link">
                  Admin
                </Link>
                <Link to="/sign-out" className="nav-link">
                  Sign Out
                </Link>
              </>
            ) : ( null
            )}
          </div> : <></> }
        </div>
      </nav>
    </header>
  );
}

export default Nav;
