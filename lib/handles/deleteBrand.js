'use strict';

const Validations = require('../validation');


exports.run = async function (request, h) {

    const server = request.server;
    const models = server.methods.models;
    const errCodes = server.app.apiResCodes.errCodes;
    const makeResponse = server.methods.makeResponse;

    const id = request.params.id ? encodeURIComponent(request.params.id) : null;
    const dataId = Object.assign({}, { id: id });

    return await Validations.validateId(dataId)
        .then(() => {

            return models.brand.obtain(dataId);
        })
        .then((data) => {

            if (!data) {
                const err = new Error(errCodes.idDoesNotExist.desc);
                err.errCode = errCodes.idDoesNotExist;
                throw err;
            }

            return models.brand.delete(dataId);
        })
        .then(() => {

            return h.response().code(204);
        })
        .catch((err) => {

            throw makeResponse(null, err);
        });
};
