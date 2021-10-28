require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/productModel");

//CORS
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Connect to database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to database"));

//Post
app.use("/", require("./routes/orderRoute"));

//Get
app.get("/products", (req, res) => {
  Product.find((err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });
});

//Listen
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
