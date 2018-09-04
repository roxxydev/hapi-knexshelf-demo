'use strict';


exports.run = async function (request, h) {

    const server = request.server;
    const models = server.methods.models;
    const makeResponse = server.methods.makeResponse;

    return await Promise.resolve()
        .then(() => {

            const brandName = request.query.name || '';
            return models.brand.browse({
                custom: (query) => {

                    query.where('name', 'like', `%${brandName}%`);
                }
            });
        })
        .then((data) => {

            const brands = Object.keys(data).map((key) => {
                return data[key];
            });
            const res = makeResponse(brands);
            return h.response(res).code(200);
        })
        .catch((err) => {

            throw makeResponse(null, err);
        });
};
