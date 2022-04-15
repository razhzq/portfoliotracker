let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

const { findById } = require('../models/OwnedAsset')
let ownedAssetSchema = require('../models/OwnedAsset')


router.post('/add-owned', (req, res, next) => {
    ownedAssetSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.get('/', (req, res) => {
    ownedAssetSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

router.route('/owned-assets/:id')
       .get((req, res) => {
           ownedAssetSchema.findById(
               req.params.id, (error, data) => {
                   if (error) {
                       return next(error)
                   } else {
                       res.json(data)
                   }
               }
           )
       })
       .put((req, res, next) => {
           ownedAssetSchema.findByIdAndUpdate(
               req.params.id,
               {
                   $set: req.body,
               },
               (error, data) => {
                   if (error) {
                       return next(error);
                       console.log(error);
                   } else {
                       res.json(data);
                       console.log('Owned Asset updated successfully')
                   }
               }
           )
       })

router.delete('/delete-owned-asset/:id', (req, res, next) => {
    ownedAssetSchema.findByIdAndRemove(
        req.params.id, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.status(200).json({
                    msg: data,
                })
            }
        }
    )
})

module.exports = router;
