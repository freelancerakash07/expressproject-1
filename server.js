const express = require('express');
const colors  = require('colors');
const dotenv  = require('dotenv');
const pageroutes = require('./routes/pagerotues');



//env fiel config
dotenv.config();

//get env file value
const port = process.env.SERVER_PORT || 4040 ;

//express inelishig
const app = express();


// static folder
app.use(express.static('./public'))





//invock routing

app.use(pageroutes);




//create server 

app.listen(5050, () => {
    console.log(`server is raning on port 5050`.bgGreen);
})




