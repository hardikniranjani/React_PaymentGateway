const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const paymentController = require('./controller/payment');
app.use(express.json());
// app.use(
//   cors({
//     credentials : true,
//     exposedHeaders: "x-access-token",
//   })
// );

app.use(cors());

app.use('/payment', paymentController);

app.use("/", (req, res) => {
    res.status(200).send("Home Page!");
  });

const PORT = process.env.PORT || 3003;
  
app.listen(PORT, () => console.log(`listening on port ${PORT}`));