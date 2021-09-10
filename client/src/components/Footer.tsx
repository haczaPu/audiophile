import React from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__line"></div>

        <div className="nav__bar">
          <img className="logo" src="./assets/images/shared/desktop/logo.svg" alt="logo" />
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
        </div>
        <p className="footer__text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
          specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
          facility - we’re open 7 days a week.
        </p>
        <div className="smedia">
          <IconContext.Provider value={{ className: "nav__cart", size: "25px" }}>
            <FaFacebookSquare />
            <FaTwitter />
            <FaInstagram />
          </IconContext.Provider>
        </div>
        <p className="footer__rights">Copyright 2021. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
