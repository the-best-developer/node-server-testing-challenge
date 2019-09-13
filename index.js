const express = require('express');
const server = express();
const booksDb = require('./database/books.js')

server.use(express.json());

server.get("/", async (req, res) => {
    return await res.status(200).send( await booksDb('books'))
})

server.post("/book", async (req, res) => {
    const {book, desc} = req.body;

    try {
        const addBook = await booksDb("books").insert({ book: book, desc: desc })
        const addedBook = await booksDb("books").where({ id: addBook[0]});
        res.status(200).json(addedBook)
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})

server.delete('/book/:id', async (req, res) => {
    const {id} = req.params;

    try {
        
        const result = await booksDb('books').where({ id: id }).del();
        (result)
            ?
                res.status(200).json({ message: `Book ${id} has been deleted` })
            :
                res.status(200).json({ message: `Book ${id} could not be deleted` })
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = server;