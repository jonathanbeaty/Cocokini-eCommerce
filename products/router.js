'use strict';
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const {
    Products
} = require('./models');

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
    Products
        .find()
        .sort('order')
        .then(Products => {
            res.json(Products.map(product => product.serialize()));
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'something went horribly awry'
            });
        });
});

router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['bikiniType', 'name', 'price', 'order', 'url'];
    const missingField = requiredFields.find(field => !(field in req.body));

    if (missingField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Missing field',
            location: missingField
        });
    }

    const stringFields = ['bikiniType', 'name'];
    const nonStringField = stringFields.find(
        field => field in req.body && typeof req.body[field] !== 'string'
    );

    if (nonStringField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Incorrect field type: expected string',
            location: nonStringField
        });
    }

    Products
        .create({
            bikiniType: req.body.bikiniType,
            name: req.body.name,
            price: req.body.price,
            order: req.body.order,
            url: req.body.url
        })
        .then(product => res.status(201).json(product.serialize()))
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'Something went bad.......very bad'
            });
        });
});

router.put('/:id', jsonParser, (req, res) => {
    if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
        const message = (
            `Request path id (${req.params.id}) and request body id ` +
            `(${req.body.id}) must match`);
        console.error(message);
        return res.status(400).json({
            message: message
        });
    }

    const toUpdate = {};
    const updateableFields = ['bikiniType', 'name', 'price', 'order', 'url'];

    updateableFields.forEach(field => {
        if (field in req.body) {
            toUpdate[field] = req.body[field];
        }
    });

    Products
        .findByIdAndUpdate(req.params.id, {
                $set: toUpdate
            },
            Products.find({
                _id: req.params.id
            }).then(function (Products) {
                res.send(Products)
            })
        )
        .then(Products => res.status(204).end())
});

router.delete('/:id', jsonParser, (req, res) => {
    Products
        .remove({
                _id: req.params.id
            },
            function (err) {
                if (!err) {
                    res.status(200).send();
                    console.log('Product successfully removed from collection!');
                } else {
                    return res.send('Error deleting Product from collection')
                }
            });
});


module.exports = {
    router
};