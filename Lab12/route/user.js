const express = require('express');
const path = require('path');

const router = express.Router();

router.get("/add", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "view", "add-user.html"));
})

router.post("/add", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "view", "users.html"));
});

module.exports = router;

