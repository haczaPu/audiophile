import React from "react";
import { Link } from "react-router-dom";

type CartProps = {
  setCartIsOpen: any;
  forwardedRef: any;
};

const Cart = ({ setCartIsOpen, forwardedRef }: CartProps) => {
  return (
    <>
      <div className="cart" ref={forwardedRef}>
        <div className="cart__top">
          <div className="cart__title typo--h6">CART (3)</div>
          <button className="cta--link typo--sub">Remove all</button>
        </div>
        <div className="summary__product-list">
          <div className="summary-item">
            <img className="summary-item__img" src="./assets/cart/image-xx99-mark-two-headphones.jpg" alt="" />
            <div className="summary-item__details">
              <div className="summary-item__name">XX99 MK II</div>
              <div className="summary-item__price">$ 2,999</div>
            </div>
            <div className="quantity">
              <button className="quantity__btn">+</button>
              <div className="quantity__value typo--h6">2</div>
              <button className="quantity__btn">-</button>
            </div>
          </div>

          <div className="summary-item">
            <img className="summary-item__img" src="./assets/cart/image-xx99-mark-two-headphones.jpg" alt="" />
            <div className="summary-item__details">
              <div className="summary-item__name">XX99 MK II</div>
              <div className="summary-item__price">$ 2,999</div>
            </div>
            <div className="quantity">
              <button className="quantity__btn">+</button>
              <div className="quantity__value typo--h6">2</div>
              <button className="quantity__btn">-</button>
            </div>
          </div>
        </div>
        <div className="summary__cost">
          <div className="cost__title">Total</div>
          <div className="cost__value">$ 2,999</div>
        </div>
        <Link style={{ textDecoration: "none" }} to="/checkout" onClick={() => setCartIsOpen(false)}>
          <button className="payment-btn payment-btn--padding">Checkout</button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
