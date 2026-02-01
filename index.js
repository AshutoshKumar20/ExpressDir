const express = require("express");
const app = express();
//This app behaves like an object and express() is a function
const port = 3000;
app.listen(port, () => {
    console.log(`app is listening on ${port}`)
});

app.get("/", (req, res) => {
    res.send("You contacted root path");
});
app.get("/apple", (req, res) => {
    res.send("You contacted apple path");
});
app.get("/orange", (req, res) => {
    res.send("You contacted orange path");
});

app.post("/", (req, res) => {
    res.send("You sent a post request to root path");
});

app.get("/", (req, res) => {
    res.status("404").send("This path does not exist");
});

// app.use((req, res) => {
//     console.log("request received");
//     // console.log(req);
//     res.send({ "fruit": "apple", "color": "red" })
// });