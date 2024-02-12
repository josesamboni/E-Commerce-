const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
  res.send("this is the router")
})


// router.use("/user", require("./user"))
// router.use("/products", require("./products"))

module.export = router;


