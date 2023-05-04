const mongoose = require('mongoose');
const mongoUri = "mongodb://127.0.0.1/myEvent"

mongoose.set("strictQuery",true)

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;


module.exports = db;