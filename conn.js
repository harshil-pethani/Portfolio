const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false
}).then(() => {
    console.log("connection with database has been Success");
}).catch((err) => {
    console.log(`Error is ${err}`);
});