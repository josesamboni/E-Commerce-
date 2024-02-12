require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PORT = 3000 } = process.env;
const router = express();

router.use(bodyParser.json());
const bodyParser = require("body-parser");
//router.use(bodyParser.urlencoded({extended:false}))

router.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
router.use(cors(corsOptions));

router.use("/api", require("./server/api"));
// router.use("/auth", require("/api/auth"))

router.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});

module.exports = router;
