'use strict';

const Boom = require('boom');


exports.run = async function () {

    return await Promise.reject(Boom.notFound());
};
