'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const CartSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    }
});

CartSchema.methods.serialize = function () {
    return {
        id: this._id,
        username: this.username,
        product: this.product
    };
};

const Cart = mongoose.model('Cart', CartSchema);

module.exports = {
    Cart
};