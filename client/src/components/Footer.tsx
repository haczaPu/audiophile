import React from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__line"></div>

        <div className="nav__bar--footer">
          <img className="logo" src="/assets/shared/desktop/logo.svg" alt="logo" />
          <ul className="nav__menu--footer">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="nav__item nav__item--footer">Home</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/headphones">
              <li className="nav__item nav__item--footer">Headphones</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/speakers">
              <li className="nav__item nav__item--footer">Speakers</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/earphones">
              <li className="nav__item nav__item--footer">Earphones</li>
            </Link>
          </ul>
        </div>
        <p className="footer__text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
          specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
          facility - we’re open 7 days a week.
        </p>
        <div className="footer__smedia-wrapper">
          <p className="footer__rights">Copyright 2021. All Rights Reserved</p>
          <div className="smedia">
            <IconContext.Provider value={{ className: "nav__cart", size: "25px" }}>
              <FaFacebookSquare />
              <FaTwitter />
              <FaInstagram />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
