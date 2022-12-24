const express = require('express')
const app = express();
const http = require('http')
require('dotenv').config()
const mongoose = require('mongoose');

const server = http.createServer(app)
const imageRouter = require('./src/routers/image')

const PORT = process.env.PORT || 5000
const URI = process.env.DB_CONNECTION

app.use('/image', imageRouter)

mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log("err", err);
    });

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
