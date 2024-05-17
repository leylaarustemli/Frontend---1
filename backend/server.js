const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { Schema } = mongoose;
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const productSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

const Products = mongoose.model("Products", productSchema);

app.get("/api/products", async (req, res) => {
  const response = await Products.find();
  res.send(response);
});
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const target = await Products.findById(id);
  res.send(target);
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  await Products.findByIdAndDelete(id);
  res.send("item deleted");
});

app.post("/api/products", async (req, res) => {
  const { title, price, image, description, category } = req.body;
  const newProd = new Products({ title, price, image, description, category });
  await newProd.save();
  res.status(201).send("item created");
});

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const { title, price, image, description, category } = req.body;
  await Products.findByIdAndUpdate(id, { ...req.body });
  res.send("item uptaded");
});
mongoose.connect(process.env.CONNECTION_STRING).then((res) => {
  console.log("db connected");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`api running in ${process.env.PORT}`);
});
