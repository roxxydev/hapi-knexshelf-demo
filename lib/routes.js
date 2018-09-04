'use strict';

const NonExistent = require('./handles/nonExistent');
const CreateBrand = require('./handles/createBrand');
const RenameBrand = require('./handles/renameBrand');
const ListBrand = require('./handles/listBrand');
const DeleteBrand = require('./handles/deleteBrand');


exports.paths = [
    { path: '/{p*}', method: '*', handler: NonExistent.run },
    { path: '/brand/create', method: 'POST', handler: CreateBrand.run },
    { path: '/brand/rename', method: 'POST', handler: RenameBrand.run },
    { path: '/brand/list', method: 'GET', handler: ListBrand.run },
    { path: '/brand/delete/{id?}', method: 'DELETE', handler: DeleteBrand.run }
];
