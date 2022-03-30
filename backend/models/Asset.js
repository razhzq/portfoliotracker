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
        type: mongoose.Types.Decimal128
    }
}, {
    collection: 'assets'
})







module.exports = mongoose.model('Asset', assetSchema)
