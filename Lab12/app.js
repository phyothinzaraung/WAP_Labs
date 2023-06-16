const express = require('express');
const path = require('path');

const productRouter = require("./route/product");
const userRouter = require("./route/user");

const app = express();

app.use(express.static(path.join(__dirname, "resource")));
app.use(express.urlencoded({extended: true}));

app.use("/index", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'))
});

app.use("/product", productRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'view', '404.html'))
})

app.listen(3000, ()=> {console.log("Listening on 3000...")});