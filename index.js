const express = require("express");
const app = express();
//This app behaves like an object and express() is a function
const port = 3000;
app.listen(port, () => {
    console.log(`app is listening on ${port}`)
});

app.use((req, res) => {
    console.log("request received");
});