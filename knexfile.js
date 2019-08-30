// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/books.db3'
    },
    useNullAsDefault: true
  },
  "jest": {
    "testEnvirnoment": "node"
  },
  test: "jest --watch --verbose",
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.db3',
    },
    useNullAsDefault: true,
  }
};
