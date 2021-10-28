const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");

router.route("/orders").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phonenumber = req.body.email;
  const zipcode = req.body.zipcode;
  const addreess = req.body.addreess;
  const city = req.body.city;
  const country = req.body.country;
  const paymentmethod = req.body.paymentmethod;
  const emoneynumber = req.body.emoneynumber;
  const emoneypin = req.body.emoneypin;

  const newOrder = new Order({
    name,
    email,
    phonenumber,
    addreess,
    zipcode,
    city,
    country,
    paymentmethod,
    emoneynumber,
    emoneypin,
  });
  newOrder.save();
});

module.exports = router;
