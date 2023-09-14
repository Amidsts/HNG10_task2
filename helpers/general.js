const joi = require("joi")


exports.inputValidator = (schema, payload) => {
    const {value, error} = schema.validate(payload)

    if (error) throw new Error(`input error: ${error}`)

    return value
}