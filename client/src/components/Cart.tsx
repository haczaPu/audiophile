import React from "react";
import { Link } from "react-router-dom";
import { ItemInCart, CartProps } from "../types/Types";

const Cart = ({ setCartIsOpen, forwardedRef, cartItems, setCartItems, removeAllHandler }: CartProps) => {
  //Compute total price
  const totalPrice: number = cartItems.reduce((a: number, c: ItemInCart) => a + c.price * c.qty, 0);

  //Decrement item in the cart
  const decrementItemInCart: Function = (productToRemove: ItemInCart) => {
    const existItem: ItemInCart = cartItems.find((x: ItemInCart) => x.slug === productToRemove.slug)!;
    if (existItem.qty === 1) {
      setCartItems(cartItems.filter((x: ItemInCart) => x.slug !== productToRemove.slug));
      //console.log("decrement item");
    } else {
      setCartItems(
        cartItems.map((x: ItemInCart) =>
          x.name === productToRemove.name ? { ...existItem, qty: existItem.qty - 1 } : x
        )
      );
    }
  };

  //Incerement item in the cart
  const incrementItemInCart: Function = (productToRemove: ItemInCart) => {
    const existItem: ItemInCart = cartItems.find((x: ItemInCart) => x.slug === productToRemove.slug)!;
    setCartItems(
      cartItems.map((x: ItemInCart) => (x.name === productToRemove.name ? { ...existItem, qty: existItem.qty + 1 } : x))
    );
  };

  return (
    <>
      <div className="cart" ref={forwardedRef}>
        {cartItems.length === 0 ? (
          <div className="cart--empty typo--h6">Cart is empty</div>
        ) : (
          <>
            <div className="cart__top">
              <div className="cart__title typo--h6">CART ({cartItems.length})</div>
              <button className="cta--link typo--sub" onClick={removeAllHandler}>
                Remove all
              </button>
            </div>

            <div className="summary__product-list">
              {cartItems.map((item: ItemInCart, i: number) => (
                <div key={i} className="summary-item">
                  <img className="summary-item__img" src={`/assets/cart/image-${item.slug}.jpg`} alt="" />
                  <div className="summary-item__details">
                    <div className="summary-item__name">{item.name}</div>
                    <div className="summary-item__price">
                      $ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                  </div>
                  <div className="quantity">
                    <button className="quantity__btn" onClick={() => incrementItemInCart(item)}>
                      +
                    </button>
                    <div className="quantity__value typo--h6">{item.qty}</div>
                    <button className="quantity__btn" onClick={() => decrementItemInCart(item)}>
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="summary__cost">
              <div className="cost__title">Total</div>
              <div className="cost__value">$ {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            </div>
            <Link style={{ textDecoration: "none" }} to="/checkout" onClick={() => setCartIsOpen(false)}>
              <button className="payment-btn payment-btn--padding">Checkout</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
