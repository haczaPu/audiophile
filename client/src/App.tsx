import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HomeMain from "./components/HomeMain";
import Headphones from "./components/Headphones";
import Speakers from "./components/Speakers";

import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/main.css";
import Earphones from "./components/Earphones";
import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./components/Checkout";
import Product from "./components/Product";

type SingleProduct = {
  id: string;
  slug: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
  category: string;
  price: number;
  new: boolean;
  description: string;
};

function App() {
  const [productsData, setProductsData] = useState<Array<SingleProduct>>([]);
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const [emoneyPayment, setEmoneyPayment] = useState<boolean>(true);

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

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Nav cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
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
