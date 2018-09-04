'use strict';

const Validations = require('../validation');
const ModelJsonCreator = require('../modelJsonCreator');


exports.run = async function (request, h) {

    const server = request.server;
    const payload = request.payload;
    const models = server.methods.models;
    const errCodes = server.app.apiResCodes.errCodes;
    const makeResponse = server.methods.makeResponse;

    return await Validations.validateBrandName(payload)
        .then(() => {

            return models.brand.obtain(ModelJsonCreator.createBrand(payload));
        })
        .then((data) => {

            if (!data) {
                return models.brand.create(ModelJsonCreator.createBrand(payload));
            }

            const err = new Error(errCodes.brandNameExisting.desc);
            err.errCode = errCodes.brandNameExisting;
            throw err;
        })
        .then((data) => {

            return h.response(data).code(201);
        })
        .catch((err) => {

            throw makeResponse(null, err);
        });
};
