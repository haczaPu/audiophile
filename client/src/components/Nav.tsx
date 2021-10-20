import React from "react";
import { IconContext } from "react-icons";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Cart from "./Cart";
import { NavProps } from "../types/Types";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Nav = ({
  cartIsOpen,
  setCartIsOpen,
  innerRef,
  innerHamRef,
  handleClickInside,
  handleClickInsideHam,
  cartItems,
  setCartItems,
  removeAllHandler,
  width,
  hamIsOpen,
  setHamIsOpen,
}: NavProps) => {
  return (
    <div className="nav">
      <div className="nav__bar">
        {width < 769 ? (
          <MobileMenu
            insideHamClick={handleClickInsideHam}
            forwardedHamRef={innerHamRef}
            setHamIsOpen={setHamIsOpen}
            hamIsOpen={hamIsOpen}
          />
        ) : (
          <DesktopMenu />
        )}
        <IconContext.Provider value={{ className: "nav__cart", size: "25px" }}>
          <div className="cart-icon">
            <HiOutlineShoppingCart onClick={handleClickInside} />
            {cartItems.length === 0 ? null : <div className="cart-icon__circle typo--sub">{cartItems.length}</div>}
          </div>
          {cartIsOpen ? (
            <Cart
              removeAllHandler={removeAllHandler}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setCartIsOpen={setCartIsOpen}
              forwardedRef={innerRef}
            />
          ) : null}
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Nav;
