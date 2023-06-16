const express = require('express');
const bookRouter = require('./route/bookRouter') ;

const app = express();

app.use(express.json());

app.use("/books",bookRouter);

app.use((req, res, next) =>{
    res.status(404).send("API is not supported");
})

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen(3000, ()=> {
    console.log("Listening on 3000");
})