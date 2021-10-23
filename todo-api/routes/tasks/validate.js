const Joi = require('joi');

const validateAdd = async (req,res,next)=>{
    const schema = Joi.object({
        title: Joi.string()
            .min(1)
            .max(250)
            .required(),
        description: Joi.string()
            .min(1)
            .max(10000)
            .required(),
    })

    try {
        const value = await schema.validateAsync(req.body.data);
        next()
    }
    catch (err) {
        next('Error validating data!')
    }
}
const validateUpdate = async (req,res,next)=>{
    const schema = Joi.object({
        id: Joi.number()
            .integer()
            .min(1)
            .required(),
        title: Joi.string()
            .min(1)
            .max(250),
        description: Joi.string()
            .min(1)
            .max(10000),
    })

    try {
        const value = await schema.validateAsync(req.body.data);
        next()
    }
    catch (err) {
        next('Error validating data!')
    }
}
const validateDelete = async (req,res,next)=>{
    const schema = Joi.object({
        id: Joi.number()
            .required(),
    })

    try {
        const value = await schema.validateAsync(req.body.data);
        next()
    }
    catch (err) {
        next('Error validating data!')
    }
}


module.exports.validateAdd = validateAdd;
module.exports.validateDelete = validateDelete;
module.exports.validateUpdate = validateUpdate;