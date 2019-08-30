const express = require('express');
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    return res.status(200).json({message: "hey!!"})
})

server.listen(5000, _ => {
  console.log(`Listening on port 5000!`);
});
