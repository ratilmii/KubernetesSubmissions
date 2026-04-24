const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Todo App</title>
      </head>
      <body>
        <h1>Todo app server running.</h1>
        <p>Welcome!</p>
      </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})
