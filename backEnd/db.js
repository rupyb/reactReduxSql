const db = require('mysql');

const pool = db.createPool({
    host: 'localhost',
    user: 'test123',
    password: 'test123',
    database: 'lionPictures'
});

module.exports = callback => {
    pool.getConnection((err, connection) => {
        if (err) {
            callback(err);
        } else {
            callback(null, connection);
        }
    });
};
