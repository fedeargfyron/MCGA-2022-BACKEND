const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const router = require('./Routes');
const url = "mongodb+srv://Fede2022:MThVsbARDDn71m7z@mcga-db.6ax3ppw.mongodb.net/?retryWrites=true&w=majority";

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.use(express.json());
app.use('/', router);

mongoose.connect(url)
    .then(() => console.log("DB ok"))
    .catch(() => console.log("Error con el servidor"));