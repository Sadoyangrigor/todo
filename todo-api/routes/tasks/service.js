const coreService = require('../core/service');
const db = require('../../connection');


const service = Object.create(coreService.service);

Object.assign(service, {
    async updateTask(data){
        return new Promise( (resolve, reject)=> {
            const id = data.id;
            delete data.id
            db('tasks')
                .where('id', '=', id)
                .update(data)
                .asCallback(function(err, rows) {
                    resolve(rows)
                })
            resolve({})
        })
    },
})

module.exports.service = service;