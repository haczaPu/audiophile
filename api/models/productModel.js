const mongoose = require("mongoose");

const Product = mongoose.Schema({
  text: {
    type: String,
  },
});

module.exports = mongoose.model("Product", Product);
