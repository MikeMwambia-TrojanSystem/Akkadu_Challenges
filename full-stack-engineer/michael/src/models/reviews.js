/*
*Schema for review
*Defining the Schema model for reviewSchema
*/
const { model,Schema } = require('mongoose');
const reviewSchema = new Schema ({
    name : String,
    rating : Number,
    reviewNote : String,
    timestamp : String
})

module.exports = model('reviews',reviewSchema);