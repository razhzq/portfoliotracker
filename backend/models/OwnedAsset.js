const mongoose = require('mongoose');
const Schema = mongoose.Schema ;


const ownedAssetSchema = Schema({
    units: { type: mongoose.Types.Decimal128,
             get: getString
    },
    bought_price: { type: mongoose.Types.Decimal128,
                    get: getString
    },
    asset: [{type: Schema.Types.ObjectId, ref: 'Asset'}],
    id: false 
}, {toJSON: {getters: true}})



function getString(value) {
    if (typeof value !== 'undefined') {
        return parseFloat(value.toString())
    }
    return value;
}


module.exports = mongoose.model('OwnedAsset', ownedAssetSchema)