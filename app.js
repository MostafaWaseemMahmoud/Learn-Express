const expresss = require("express");
const app = expresss();

//  * HTTP Methods

// Get

app.get("/", (req, res) => {
  res.send("Welcome At Home???");
});

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

// Post
// Put
//Delete

// We Now Create A New Host Server

app.listen(3000, () => {
  console.log("started On Port 3000");
});
