const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/add", (req, res, next) => {
    res.sendFile(path.join(__dirname,"..", "view", "add-product.html"));
});

router.post("/add", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "view", "products.html"));
})

module.exports = router;