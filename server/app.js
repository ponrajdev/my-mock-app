const express   = require('express');
const dotenv    = require('dotenv').config();
const port      = process.env.PORT || 4000; 

const cors      = require('cors');
const app       = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/post',require('./routes/postRoute'));

app.listen(port,()=> console.log(`Server ${ port }`))