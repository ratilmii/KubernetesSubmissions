const express = require("express");
const { randomUUID } = require("crypto");

const app = express();
const port = process.env.PORT || 8060;

const id = randomUUID();

function getStatus() {
  return {
    timestamp: new Date().toISOString(),
    id,
  };
}

setInterval(() => {
  const status = getStatus();
  console.log(`${status.timestamp}: ${status.id}`);
}, 5000);

app.get('/', (req, res) => {
  const status = getStatus();
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Log Output</title>
      </head>
      <body>
        <h1>Log Output Status</h1>
        <p>${status.timestamp}: ${status.id}</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});