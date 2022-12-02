const express   = require('express');


const cors      = require('cors');
const app       = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/post',require('./routes/postRoute'));

app.get("/", (req, res) => res.send("Hello World!"));

module.exports = app;