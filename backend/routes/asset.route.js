let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

const { findById } = require('../models/Asset');
let assetSchema = require('../models/Asset');

router.post('/create-asset', (req, res, next) => {
    assetSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.get('/', (req, res) => {
    assetSchema.find((error , data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

router.route('/assets/:id')
        .get((req, res) => {
            assetSchema.findById(
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
            assetSchema.findByIdAndUpdate(
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
                        console.log('Asset updated successfully!')
                    }
                }
            )
        })


router.delete('/delete-asset/:id', (req,res, next) => {
    assetSchema.findByIdAndRemove(
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
