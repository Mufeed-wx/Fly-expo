const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let carouselSchema = new Schema({
    Curousel_title: {
        type: Array,
    },
    image: {
        type: Array,
    },
}, { timestamps: true })

const addCarousel = mongoose.model("curousel", carouselSchema);
module.exports = addCarousel;