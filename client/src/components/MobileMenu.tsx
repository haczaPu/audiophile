import React from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { MobileMenuProps } from "../types/Types";

const MobileMenu = ({ hamIsOpen, setHamIsOpen, forwardedHamRef, insideHamClick }: MobileMenuProps) => {
  //Handle close modal
  const closeModalHandler = () => {
    setHamIsOpen(false);
  };

  return (
    <>
      <div onClick={insideHamClick}>
        <Hamburger rounded toggled={hamIsOpen} toggle={setHamIsOpen} color="white" size={24} />
      </div>
      {hamIsOpen ? (
        <>
          <ul className="nav__menu nav__menu--hamb" ref={forwardedHamRef}>
            <div className="hamb-wrapper">
              <Link to="/" style={{ textDecoration: "none" }} onClick={closeModalHandler}>
                <li className="nav__item nav__item--hamb">Home</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/headphones" onClick={closeModalHandler}>
                <li className="nav__item nav__item--hamb">Headphones</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/speakers" onClick={closeModalHandler}>
                <li className="nav__item nav__item--hamb">Speakers</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/earphones" onClick={closeModalHandler}>
                <li className="nav__item nav__item--hamb">Earphones</li>
              </Link>
            </div>
          </ul>
        </>
      ) : (
        <></>
      )}

      <Link to="/" style={{ textDecoration: "none" }}>
        <img className="logo" src="/assets/shared/desktop/logo.svg" alt="logo"></img>
      </Link>
    </>
  );
};

export default MobileMenu;
