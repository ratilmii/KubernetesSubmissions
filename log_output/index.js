const { randomUUID } = require("crypto");

const id = randomUUID();

setInterval(() => {
  const timestamp = new Date().toISOString();  
  console.log(`${timestamp}: ${id}`);
}, 5000);