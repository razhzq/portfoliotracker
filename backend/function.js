const AssetName = require('../backend/models/Asset')

AssetName.findOne().populate('name')