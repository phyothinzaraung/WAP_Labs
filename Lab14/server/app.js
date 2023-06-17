const express = require("express");
const cors = require('cors');

const bookRouter = require('./route/bookRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.use("/books", bookRouter);

app.use((req, res, next) => {
    res.status(400).send("Api is not supported.");
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen(3000, ()=> {
    console.log("listening on 3000");
});