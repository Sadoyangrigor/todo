const db = require('../../connection');

const service = {
    async getAll(){
        return new Promise( (resolve)=> {
            db('tasks')
                .select('id','title','description','date_time')
                .orderBy('id', 'desc')
                .then(function(tasks){
                    resolve(tasks)
                });
        })
    },
    async insert(data){
        return new Promise( (resolve)=> {
            db('tasks').insert(data)
                .asCallback(function(err, rows) {
                if (err) resolve(err)
                    db('tasks')
                        .where('id', rows[0])
                        .asCallback(function(err, rows) {
                            resolve(rows)
                        })

                });
        })
    },
    async update(){
        return new Promise( (resolve, reject)=> {
            resolve({})
        })
    },
    async delete(id){
        return new Promise( (resolve, reject)=> {
            db('tasks')
                .where('id', id)
                .del()
                .asCallback(function(err, rows) {
                    if (err) resolve(err)
                    resolve()
                });
        })
    }
}

module.exports.service = service;
