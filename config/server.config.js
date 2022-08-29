//let serverPort = 8080;
//require('dotenv').config();


if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
    //serverPort = process.env.PORT
} 

module.exports = {
    serverPort: process.env.PORT
}