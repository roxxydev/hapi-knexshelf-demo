'use strict';

const Validations = require('../validation');


exports.run = async function (request, h) {

    const server = request.server;
    const payload = request.payload;
    const models = server.methods.models;
    const errCodes = server.app.apiResCodes.errCodes;
    const makeResponse = server.methods.makeResponse;

    return await Validations.validateRenameBrand(payload)
        .then(() => {

            return models.brand.obtain({ id: payload.id });
        })
        .then((data) => {

            if (!data) {
                const err = new Error(errCodes.idDoesNotExist.desc);
                err.errCode = errCodes.idDoesNotExist;
                throw err;
            }

            return models.brand.obtain({ name: payload.name });
        })
        .then((data) => {

            if (data) {
                const err = new Error(errCodes.brandNameExisting.desc);
                err.errCode = errCodes.brandNameExisting;
                throw err;
            }

            return models.brand.update({ id: payload.id }, { name: payload.name });
        })
        .then((data) => {

            const res = makeResponse(data);
            return h.response(res).code(200);
        })
        .catch((err) => {

            throw makeResponse(null, err);
        });
};
