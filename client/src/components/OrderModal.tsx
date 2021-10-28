import React, { useState } from "react";
import { OrderModalProps } from "../types/Types";
import { Link } from "react-router-dom";

const OrderModal = ({ cartItems, setCartItems, setOrderModalIsOpen, grandtotal }: OrderModalProps) => {
  const [viewMore, setViewMore] = useState(false);
  let showItems = cartItems;

  //Show more/less items
  if (!viewMore) {
    showItems = cartItems.slice(0, 1);
  }

  //Go back to home button
  const handleGoToHome = () => {
    setOrderModalIsOpen(false);
    setCartItems([]);
  };

  return (
    <>
      <div className="order-modal">
        <div className="order-modal__content">
          <img className="order-modal__icon" src="./assets/shared/desktop/icon-order-submited.png" alt="" />
          <h3 className="typo--h3">
            Thank you <br /> for your order
          </h3>
          <div className="typo--common">Tou will recive an email confirmation shortly.</div>
        </div>
        <div className="order-modal__order">
          <div className="order-modal__items">
            {showItems.map((item: any, i: number) => (
              <div className="order-modal__item" key={i}>
                <img className="order-item__img" src={`./assets/cart/image-${item.slug}.jpg`} alt="" />
                <div className="order-item__name-wrapper">
                  <div className="order-item__name typo--common ">
                    {item.name.substring(0, item.name.lastIndexOf(" "))}
                  </div>
                  <div className="order-item__price typo--common">
                    $ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </div>
                <div className="order-item__qty typo--common">x{item.qty}</div>
              </div>
            ))}
            {cartItems.length <= 1 ? null : (
              <div className="order-item__more-less typo--common" onClick={() => setViewMore(!viewMore)}>
                {viewMore ? "View less" : `and ${cartItems.length - 1} other item(s)`} {}
              </div>
            )}
          </div>
          <div className="order-modal__price typo--common">
            <div className="order-modal__total-title typo--common">GRAND TOTAL</div>
            <h6 className="order-modal__total typo--h6 ">
              $ {grandtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h6>
          </div>
        </div>

        <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleGoToHome()}>
          <button className="cta cta--wide">BACK TO HOME</button>
        </Link>
      </div>
      <div className="order-modal__bg"></div>
    </>
  );
};

export default OrderModal;
