const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require("body-parser")
const dotenv=require('dotenv');

const heroRoute = require('./routes/hero.js');

const cors = require('cors');
const app = express();
dotenv.config()
const MONGODB_URI= process.env.MONGODB_URI
const PORT = process.env.PORT || 5000

app.use(bodyParser.json());


app.use(express.json());
app.use(cors());

app.use( '/hero' , heroRoute );

app.use( '/getimage' , express.static('./upload')  );


mongoose.connect(MONGODB_URI).then(()=>{
    console.log('connected to the database');
    app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`);})
}).catch(err=>{console.log(err);})