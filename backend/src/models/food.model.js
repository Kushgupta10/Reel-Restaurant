const mongoose = require('mongoose');
const foodPartnerModel = require('./foodpartner.model');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
},
video: {
    type: String,
    required: true
},
description: {
    type: String
},
 foodPartnerModel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "foodPartner"
},
likeCount: {
    type: Number,
    default: 0
}

})
const foodModel = mongoose.model("food", foodSchema);

module.exports = foodModel;