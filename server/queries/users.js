// all of the queries associated with users table
const Joi = require('joi');
const db = require('../db')

const schema = Joi.object().keys({
    display_name: Joi.string().required(),
    email: Joi.string().email(),
    google_id: Joi.string().required(),
    // banned: Joi.boolean().required(),
    image_url: Joi.string().uri({
        scheme: [
            /https/
        ]
    }),
    role_id: Joi.number().integer()
})

module.exports = {
    findByEmail(email) {
        // database, grab the users table where the email is this given email & grab the first one
        // returns a promise
        return db('users').where('email', email).first()
    },
    update(id, user) {
        return db('users').where('id', id).update(user)
    },
    insert(user) {
        // https://joi.dev/api/?v=17.2.1
        const { error, value } = schema.validate(user)

        try {
            return db('users').insert(value)
        }
        catch (error) {
            Promise.reject(error)
        }
    }
}