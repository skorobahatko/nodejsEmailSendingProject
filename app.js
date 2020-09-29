const express = require ('express');
const app = express ();
const { apiRouter } = require ('./routes');
const dotenv = require ('dotenv');

dotenv.config ();

const instance = require ('./dataBase').getInstance ();
instance.setModels ();

app.use (express.urlencoded ({ extended: false }));
app.use (express.json ());

app.use ('/api', apiRouter);

app.use ('*', (err, req, res, next) => {
    res.status (err.status || 404).json ({
        message: 'err',
        code: ''
    })
});

app.listen (8080, (err) => {
    if (err) console.log (err);
    console.log ('server listening on 8080');
});

process.on('unhandledRejection', reason => {
    console.log ('***************`')
    console.log (reason);
    console.log ('***************`')
})
