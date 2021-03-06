import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useOnClickOutside from "./hooks/useOnClickOutside";
import "./style/main.css";
import { ItemInCart, SingleProduct } from "./types/Types";
import useLocalStorage from "./hooks/useLocalStorage";

//Import components
import Footer from "./components/Footer";
import HomeMain from "./components/HomeMain";
import Headphones from "./components/Headphones";
import Speakers from "./components/Speakers";
import Nav from "./components/Nav";
import Earphones from "./components/Earphones";
import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./components/Checkout";
import Product from "./components/Product";

function App() {
  const [hamIsOpen, setHamIsOpen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [productsData, setProductsData] = useState<Array<SingleProduct>>([]);
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const [orderModalIsOpen, setOrderModalIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useLocalStorage<Array<ItemInCart>>("cart items", []);
  const ref = useRef(null);
  const refHam = useRef(null);
  const [emoneyPayment, setEmoneyPayment] = useState<boolean>(true);

  //Fetching products data
  useEffect(() => {
    fetch("http://localhost:3001/api", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res: any) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => setProductsData(data))
      .catch(console.error);
  }, []);

  //Cart modal handlers
  const handleClickOutside = () => {
    setCartIsOpen(false);
  };

  const handleClickInside = () => {
    setCartIsOpen(true);
  };

  //Hamburger menu modal handlers
  const handleClickOutsideHam = () => {
    setHamIsOpen(false);
  };

  const handleClickInsideHam = () => {
    setHamIsOpen(true);
  };

  //Remove all items from cart
  const removeAllHandler = () => {
    setCartItems([]);
  };

  //React hook listening for clicks outside of a cart modal
  useOnClickOutside(ref, handleClickOutside);

  //React hook listening for clicks outside of a hamburger menu modal
  useOnClickOutside(refHam, handleClickOutsideHam);

  //Window size listener
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Nav
          width={width}
          cartIsOpen={cartIsOpen}
          cartItems={cartItems}
          setCartItems={setCartItems}
          setCartIsOpen={setCartIsOpen}
          handleClickOutside={handleClickOutside}
          handleClickInside={handleClickInside}
          handleClickOutsideHam={handleClickOutsideHam}
          handleClickInsideHam={handleClickInsideHam}
          innerRef={ref}
          innerHamRef={refHam}
          removeAllHandler={removeAllHandler}
          hamIsOpen={hamIsOpen}
          setHamIsOpen={setHamIsOpen}
        />
        {cartIsOpen || (hamIsOpen && width < 769) ? <div className="cart__bg"></div> : null}
        <Switch>
          <Route path="/" exact>
            <HomeMain />
          </Route>
          <Route path="/headphones" component={Headphones} />
          <Route path="/speakers" component={Speakers} />
          <Route path="/earphones" component={Earphones} />
          <Route path="/product/:slug">
            <Product productsData={productsData} cartItems={cartItems} setCartItems={setCartItems} />
          </Route>
          <Route path="/checkout">
            <Checkout
              emoneyPayment={emoneyPayment}
              setEmoneyPayment={setEmoneyPayment}
              cartItems={cartItems}
              orderModalIsOpen={orderModalIsOpen}
              setOrderModalIsOpen={setOrderModalIsOpen}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
