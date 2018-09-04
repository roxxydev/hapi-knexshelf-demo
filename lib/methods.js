'use strict';

const Boom = require('boom');


const makeResponse = (payload, err) => {

    let res = {};
    let code = null;

    if (err) {
        res = Boom.badRequest(err);

        if (err.errCode) {
            code = (err.errCode ? err.errCode : null);
        }
    }

    if (Array.isArray(payload)) {
        return payload;
    }

    if (code) {
        res.output.payload.code = res.code;
    }

    if (payload) {
        res = Object.assign(res, payload);
    }

    return res;
};


exports.load = () => {

    const methods = [{
        name: 'makeResponse',
        method: makeResponse
    }];

    return methods;
};
