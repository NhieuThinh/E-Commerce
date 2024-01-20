const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./Routes/userRoute");
const authRoute = require("./Routes/authRoute");
const productRoute = require("./Routes/productRoute");
const cartRoute = require("./Routes/authRoute");
const orderRoute = require("./Routes/orderRoute");
const cors = require('cors');
app.use(cors());


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connect successfully"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app.listen(5000, () => {
  console.log("Backend server is running!!!");
});
