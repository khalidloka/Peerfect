const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect');

const PORT = process.env.PORT || 5700;
const routers = require('./routes/router')


dbConnect();


app.use('/Peerfect',routers);

app.listen(PORT, ()=>{
    console.log(PORT);
})
