const mongoose = require("mongoose");
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
