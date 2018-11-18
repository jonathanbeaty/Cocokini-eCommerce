'use strict';
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const {
    Events
} = require('./models');

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
    Events
        .find()
        .then(Events => {
            res.json(Events.map(event => event.serialize()));
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: 'something went horribly awry'
            });
        });
});

router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['name', 'location', 'url'];
    const missingField = requiredFields.find(field => !(field in req.body));

    if (missingField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Missing field',
            location: missingField
        });
    }

    const stringFields = ['name', 'location', 'url'];
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

    Events
        .create({
            name: req.body.name,
            location: req.body.location,
            url: req.body.url
        })
        .then(event => res.status(201).json(event.serialize()))
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
    const updateableFields = ['name', 'location', 'url'];

    updateableFields.forEach(field => {
        if (field in req.body) {
            toUpdate[field] = req.body[field];
        }
    });

    Events
        .findByIdAndUpdate(req.params.id, {
                $set: toUpdate
            },
            Events.find({
                _id: req.params.id
            }).then(function (Events) {
                res.send(Events)
            })
        )
        .then(Events => res.status(204).end())
});

router.delete('/:id', jsonParser, (req, res) => {
    Events
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