const express = require('express');
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    return res.status(200).json({ message: "hey!!" })
})

server.post("/books", (req, res) => {
    const { book, desc } = req.body;
    return res.status(201).json({ message: "hey!!" })
})

module.exports = server;