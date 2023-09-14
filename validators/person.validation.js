const joi = require("joi")
const {inputValidator} = require("../helpers/general")

exports.createtPersonValidate = (payload) => {

    return inputValidator(
        joi.object({
            name: joi.string().required(),
            password: joi.string().required(),
            email: joi.string().required()
        }),
        payload
    )
}

