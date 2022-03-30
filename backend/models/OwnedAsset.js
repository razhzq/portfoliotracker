const mongoose = require('mongoose');
const Schema = mongoose.Schema ;


const ownedAssetSchema = Schema({
    units: mongoose.Types.Decimal128,
    bought_price: mongoose.Types.Decimal128,
    asset: [{type: Schema.Types.ObjectId, ref: 'Asset'}] 
})


module.exports = mongoose.model('OwnedAsset', ownedAssetSchema)