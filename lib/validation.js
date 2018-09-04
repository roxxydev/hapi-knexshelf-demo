'use strict';

const Joi = require('joi');


const brandValidation = {
    id: Joi.number().integer().required(),
    name: Joi.string().required()
};

exports.validateId = function (id) {

    return Joi.validate(id, { id: brandValidation.id });
};


exports.validateBrandName = function (brandName) {

    return Joi.validate(brandName, { name: brandValidation.name });
};


exports.validateRenameBrand = function (data) {

    const schema = {
        id: brandValidation.id,
        name: brandValidation.name
    };

    return Joi.validate(data, schema);
};
