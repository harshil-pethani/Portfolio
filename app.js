// const dotenv = require("dotenv");
const express = require("express");
const app = express();

require('dotenv').config({ path: './config.env' });

require('./conn');

const msgRoute = require('./Routes/sendmsg');

app.use(express.json());
app.use('/sendmsg', msgRoute);

const port = process.env.PORT || 5000;


if(process.env.NODE_ENV == "production")
{
    app.use(express.static("front-end/build"));
}

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});