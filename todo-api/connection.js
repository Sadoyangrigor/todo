const connection = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'test',
        password : '123456',
        database : 'todo',
    }
});
module.exports = connection;

