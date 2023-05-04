const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    imageUrl:String,
    name:String,
    description:String,
    date:Date,
    time:String,
    location:String,
    price:Number,
    category:String
})

const event = mongoose.model('event',eventSchema)

module.exports = event