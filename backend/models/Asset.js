const mongoose = require('mongoose');
const Schema = mongoose.Schema ;






const assetSchema = new Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    current_price: {
        type: mongoose.Types.Decimal128,
        get: getPrice
    },
    id: false
},  {toJSON: {getters: true}})





function getPrice(value) {
    if (typeof value !== 'undefined') {
        return parseFloat(value.toString())
    }
    return value;
};







module.exports = mongoose.model('Asset', assetSchema)
