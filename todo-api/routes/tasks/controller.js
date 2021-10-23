const service = require('./service');

module.exports.controller = {
    async all(req,res,next){
        try {
            let x = await service.service.getAll()
            res.json({error:false, data:x})
        }  catch (err) {
            res.json('err',err)
        }
    },
    async add(req,res,next){
        try {
            let x = await service.service.insert(req.body.data)
            res.json({error:false, data:x})
        }  catch (err) {
            res.json('err',err)
        }
    },
    async update(req,res,next){
        try {
            let x = await service.service.updateTask(req.body.data)
            res.json({error:false, data:x})
        }  catch (err) {
            res.json('err',err)
        }
    },
    async delete(req,res,next){
        try {
            await service.service.delete(req.body.id)
            res.json({error:false})
        }  catch (err) {
            res.json('err',err)
        }
    }
}