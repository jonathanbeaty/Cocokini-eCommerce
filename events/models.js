'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const EventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
});

EventSchema.methods.serialize = function () {
    return {
        id: this._id,
        name: this.name,
        location: this.location,
        url: this.url
    };
};

const Events = mongoose.model('Events', EventSchema);

module.exports = {
    Events
};