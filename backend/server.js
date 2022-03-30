let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser');

require('dotenv').config();


const app = express();


//database connection
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open',  () => {
    console.log('MongoDB connection established')
})

//Express Route
const assetRoute = require('../backend/routes/asset.route')
const ownedAssetRoute = require('../backend/routes/owned.routed')
app.use('/assets', assetRoute)
app.use('/owned', ownedAssetRoute)


// PORT
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log('connected to port: ' + port)
})

//404
app.use((req, res, next) => {
    res.status(404).send('Error 404!')
})