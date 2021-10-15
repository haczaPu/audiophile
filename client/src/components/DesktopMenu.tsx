import React from "react";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img className="logo" src="/assets/shared/desktop/logo.svg" alt="logo"></img>
      </Link>
      <ul className="nav__menu">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="nav__item">Home</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/headphones">
          <li className="nav__item">Headphones</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/speakers">
          <li className="nav__item">Speakers</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/earphones">
          <li className="nav__item">Earphones</li>
        </Link>
      </ul>
    </>
  );
};

export default DesktopMenu;
