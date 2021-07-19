const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000; 
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; 
mongoose.connect(uri, {useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology : true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB connection activated');
});


const userRouter = require('./routes/userRoute');
app.use('/users', userRouter);
const penRouter = require('./routes/penRoute');
app.use('/pens', penRouter);
app.listen(port, () => {
    console.log('App activated to listen on port - ' + port);
})