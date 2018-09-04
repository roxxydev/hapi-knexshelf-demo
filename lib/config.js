'use strict';

const Spiels = require('./spiels');
const ApiResCodes = require('./apiResCodes');


exports.defaults = {
    host: String('localhost'),
    port: parseInt(process.env.PORT || 8088),
    dbConnString: String(process.env.DB_CONN_STRING || 'postgres://postgres:postgres@localhost:5432/postgres')
};

exports.connection = {
    host: exports.defaults.host,
    port: exports.defaults.port
};

exports.log = {
    debug: {
        log: ['log', 'err', 'debug', 'info', 'warning']
    }
};

exports.app = {
    spiels: Spiels,
    apiResCodes: ApiResCodes
}
