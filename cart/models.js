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
    },
    size: {
        type: String
    },
    fabric: {
        type: String
    },
    price: {
        type: Number
    }
});

CartSchema.methods.serialize = function () {
    return {
        id: this._id,
        username: this.username,
        product: this.product,
        size: this.size,
        fabric: this.fabric,
        price: this.price
    };
};

const Cart = mongoose.model('Cart', CartSchema);

module.exports = {
    Cart
};