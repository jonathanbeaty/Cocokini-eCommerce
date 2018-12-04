'use strict';
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const {
    Cart
} = require('./models');

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
    Cart
        .find()
        .then(Cart => {
            res.json(Cart.map(cart => cart.serialize()));
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'something went horribly awry'
            });
        });
});

router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['username', 'product'];
    const missingField = requiredFields.find(field => !(field in req.body));

    if (missingField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Missing field',
            location: missingField
        });
    }

    const stringFields = ['username', 'product', 'size', 'fabric'];
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

    Cart
        .create({
            username: req.body.username,
            product: req.body.product,
            size: req.body.size,
            fabric: req.body.fabric,
            price: req.body.price
        })
        .then(cart => res.status(201).json(cart.serialize()))
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
    const updateableFields = ['username', 'product', 'size', 'fabric', 'price'];

    updateableFields.forEach(field => {
        if (field in req.body) {
            toUpdate[field] = req.body[field];
        }
    });

    Cart
        .findByIdAndUpdate(req.params.id, {
                $set: toUpdate
            },
            Cart.find({
                _id: req.params.id
            }).then(function (Events) {
                res.send(Events)
            })
        )
        .then(Cart => res.status(204).end())
});

router.delete('/:id', jsonParser, (req, res) => {
    Cart
        .remove({
                _id: req.params.id
            },
            function (err) {
                if (!err) {
                    res.status(200).send();
                    console.log('Event successfully removed from collection!');
                } else {
                    return res.send('Error deleting Event from collection')
                }
            });
});


module.exports = {
    router
};