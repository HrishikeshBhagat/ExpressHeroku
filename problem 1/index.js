const data = require("./student/getDetails.json");
const express = require("express");
const app = express();

const PORT = 8000;
app.post("/student/getDetails", function (req, res) {
  res.send(data);
});
app.listen(PORT, console.log(`server runnig on ${PORT}`));
