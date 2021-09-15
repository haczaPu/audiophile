import React from "react";
import { IconContext } from "react-icons";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import Cart from "./Cart";

type NavProps = {
  cartIsOpen: boolean;
  setCartIsOpen: any;
  innerRef: any;
  handleClickOutside: any;
  handleClickInside: any;
};

const Nav = ({ cartIsOpen, setCartIsOpen, innerRef, handleClickInside }: NavProps) => {
  return (
    <div className="nav">
      <div className="nav__bar">
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
        <IconContext.Provider value={{ className: "nav__cart", size: "25px" }}>
          <HiOutlineShoppingCart onClick={handleClickInside} />
          {cartIsOpen ? <Cart setCartIsOpen={setCartIsOpen} forwardedRef={innerRef} /> : null}
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Nav;
