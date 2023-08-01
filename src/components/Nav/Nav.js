import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflixLogo from "../../images/netflix-logo3.png";
import netflixAvatar from "../../images/netflix-avatar.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);

  const NavBarVisibility = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", NavBarVisibility);
    return () => {
      window.removeEventListener("scroll", NavBarVisibility);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <Link to="/">
        <img src={netflixLogo} className="nav-logo" alt="logo" />
      </Link>
      <img src={netflixAvatar} className="nav-avatar" alt="avatar" />
    </div>
  );
};

export default Nav;
