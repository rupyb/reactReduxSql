/* eslint-disable no-console */
const express = require('express');
const pool = require('./db');

const app = express();
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const route = express.Router();
const PORT =  process.env.PORT || 8080;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('cors')());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.route('/')
    .get((req, res, next) => {
        pool((error, connection) => {
            if (error) {
                return next(error);
            }
            connection.query('SELECT * FROM pictures;', (error, result) => {
                connection.release();
                if (error) {
                    next(error);
                }
                console.log(result);
            
                res.send(result);
            });

        });
    })
    .post((req, res, next) => {
        pool((error, connection) => {
            if (error) {
                return next(error);
            }

            connection.query('INSERT INTO pictures(id, source, caption) VALUES(?, ?, ?)', 
                [req.body.id, req.body.source, req.body.caption], (error, result) => {
                    connection.release();
                    if (error) {
                        console.log('error');
                        next(error);
                    }
                    console.log(result.affectedRows);
            
                    res.json(result);
                });
            // console.log(req.body.id);
            // console.log(req.body.imageLink);
            // console.log(req.body.description);
            // res.send('sucess');
        });
    });

app.delete('/:id', (req, res, next) => {
    console.log(req.params);
    console.log(req.params.id);
    pool((error, connection) => {
        if (error) {
            return next(error);
        }

        connection.query('DELETE FROM pictures WHERE id = ?', 
            [req.params.id], (error, result) => {
                connection.release();
                if (error) {
                    console.log('error');
                    next(error);
                }
               
                console.log(result);
                res.json(result);
            });
    });
});    

app.use((err, req, res, next) => {
    res.end(err);
});

app.listen(PORT, () => console.log('running on port: ', PORT));