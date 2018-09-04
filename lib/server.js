'use strict';

const Hapi = require('hapi');
const Config = require('./config');
const Routes = require('./routes');
const Plugins = require('./plugins');
const Methods = require('./methods');


const options = Object.assign({}, Config.connection, Config.log);
const server = new Hapi.Server(options);
server.app = Object.assign(server.app, Config.app);
server.bind({ server: server });

const ready = Promise.all([
    server.register(Plugins.plugins),
    server.method(Methods.load()),
    server.route(Routes.paths),
    server
]);

module.exports = ready;
