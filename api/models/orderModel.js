const mongoose = require("mongoose");

const orderSchema = {
  name: String,
  email: String,
  phonenumber: String,
  addreess: String,
  zipcode: String,
  city: String,
  country: String,
  paymentmethod: String,
  emoneynumber: String,
  emoneypin: String,
};

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
