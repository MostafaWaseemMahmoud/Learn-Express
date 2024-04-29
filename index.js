const expresss = require("express");
const app = expresss();
app.use(expresss.json());
let users = [];
//  * HTTP Methods

const port = 3000 || process.env.PORT;
// Get

app.get("/", (req, res) => {
  res.send("Welcome At Home???");
});

app.get("/users", (req, res) => {
  if (users.length == 0) {
    res.status(404).send("No Users Found");
    return;
  } else {
    res.status(200).send(users);
  }
});

// Post

app.post("/users", (request, response) => {
  const user = request.body;
  const findUser = users.find((x) => x.id === request.body.id);

  if (findUser) {
    response.status(400).send("User Is Already Exist");
    return;
  }

  users.push(user);
  response.status(201).send("Created!");
});

app.get("/test", (req, res) => {
  res.json({ message: "This Is A Test End Point" });
});

//Delete
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const finduserIndex = users.findIndex((x) => x.id === id);
  if (finduserIndex == -1) {
    response.status(404).send("User Is Not Find");
    return;
  }
  users.splice(finduserIndex, 1);
  res.status(200).send("User Deleted");
});
// We Now Create A New Host Server

app.listen(port, () => {
  console.log("started On Port " + port);
});
