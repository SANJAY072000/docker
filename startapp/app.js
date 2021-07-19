const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dbstr =
  "mongodb+srv://sanjay_20:san07jay@cluster0-yxg19.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(dbstr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Routed" });
});

app.listen(3000, () => console.log(`Server is running at 3000`));
