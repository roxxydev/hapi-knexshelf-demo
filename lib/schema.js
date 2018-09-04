'use strict';

module.exports = [
    {
        name: 'brand',
        protoProps: {
            tableName: 'brand_table',
            withUpdatedAt: true
        },
        columns: (table) => {

            table.string('name').notNullable();
        },
        constraints: (table) => {

            table.unique('name');
        }
    }
];
