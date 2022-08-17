const data = require("./student/getDetails.json");
const express = require("express");
const app = express();
const port = 8000;
app.get("/", (req, res) => {
  res.send("api is running...");
});

app.get("/student/getDetails", function (req, res) {
  res.send(data);
});
app.listen(port, console.log(`server runnig on port ${port} `));
