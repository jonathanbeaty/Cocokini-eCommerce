'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ProductsSchema = mongoose.Schema({
    bikiniType: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
});

ProductsSchema.methods.serialize = function () {
    return {
        id: this._id,
        bikiniType: this.bikiniType,
        name: this.name,
        url: this.url
    };
};

const Products = mongoose.model('Products', ProductsSchema);

module.exports = {
    Products
};