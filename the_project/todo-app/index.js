const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send("Todo app server running")
})

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})
