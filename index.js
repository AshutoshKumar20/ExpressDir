const express = require("express");
const app = express();
//This app behaves like an object and express() is a function
const port = 3000;
app.listen(port, () => {
    console.log(`app is listening on ${port}`)
});

app.get("/", (req, res) => {
    res.send("You contacted at root path");
});

app.get("/:userName/:id", (req, res) => {
    let { userName, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${userName}</h1>`;
    res.send(htmlStr)
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send("Nothing searched")
    }
    let htmlQue = `<h1>Here are the searched results @${q}</h1>`;
    res.send(htmlQue);
});


// app.use((req, res) => {
//     console.log("request received");
//     // console.log(req);
//     res.send({ "fruit": "apple", "color": "red" })
// });