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

function App() {
  const [productsData, setProductsData] = useState<Array<Object>>([]);
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
          <Route path="/product/:id" />
          <Route
            path="/checkout"
            render={() => <Checkout emoneyPayment={emoneyPayment} setEmoneyPayment={setEmoneyPayment} />}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
