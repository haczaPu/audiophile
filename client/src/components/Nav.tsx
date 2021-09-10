import React from "react";
import { IconContext } from "react-icons";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import Cart from "./Cart";

type NavProps = {
  cartIsOpen: boolean;
  setCartIsOpen: any;
};

const Nav = ({ cartIsOpen, setCartIsOpen }: NavProps) => {
  return (
    <div className="nav">
      <div className="nav__bar">
        <img className="logo" src="./assets/images/shared/desktop/logo.svg" alt="logo"></img>
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
          <HiOutlineShoppingCart onClick={() => setCartIsOpen(!cartIsOpen)} />
          {cartIsOpen ? <Cart setCartIsOpen={setCartIsOpen} /> : null}
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Nav;