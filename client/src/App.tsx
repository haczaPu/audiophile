import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useOnClickOutside from "./hooks/useOnClickOutside";
import "./style/main.css";

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

type Includes = {
  quantity: number;
  item: string;
};

type Others = {
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
};

type SingleProduct = {
  id: number;
  slug: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
  category: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<Includes>;
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: Array<Others>;
};

function App() {
  const [productsData, setProductsData] = useState<Array<SingleProduct>>([]);
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const ref = useRef(null);
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

  //React hook listening for clicks outside of a cart modal
  useOnClickOutside(ref, handleClickOutside);

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Nav
          cartIsOpen={cartIsOpen}
          setCartIsOpen={setCartIsOpen}
          handleClickOutside={handleClickOutside}
          innerRef={ref}
          handleClickInside={handleClickInside}
        />
        {cartIsOpen ? <div className="cart__bg"></div> : null}
        <Switch>
          <Route path="/" exact component={HomeMain} />
          <Route path="/headphones" component={Headphones} />
          <Route path="/speakers" component={Speakers} />
          <Route path="/earphones" component={Earphones} />
          <Route path="/product/:id">
            <Product productsData={productsData} />
          </Route>
          <Route path="/checkout">
            <Checkout emoneyPayment={emoneyPayment} setEmoneyPayment={setEmoneyPayment} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
