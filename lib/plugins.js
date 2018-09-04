'use strict';

const Good = require('good');
const Knexshelf = require('knexshelf');
const Schemas = require('./schema');
const Config = require('./config');
const Path = require('path');


const plugins = [
    {
        plugin: Knexshelf.generateHapiPlugin(Path.resolve(__dirname, '../package.json'), Schemas),
        options: { conns: Config.defaults.dbConnString }
    },
    {
        plugin: Good,
        options: {
            reporters: {
                console: [{
                    name: 'Squeeze',
                    module: 'good-squeeze',
                    args: [{ log: '*', error: '*', response: '*' }]
                }, {
                    module: 'good-console',
                    args: [{ utc: false }]
                }, 'stdout']
            }
        }
    }
];


exports.plugins = plugins;
