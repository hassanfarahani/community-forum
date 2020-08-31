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
    async update(id, user) {
        //with SQL queries, for an update statement, we need to tell it what you want back ==> * === we want everything
        // an update, could potentially update multiple rows; it is only gonna update one, but you do get back an array
        const rows = await db('users').where('id', id).update(user, '*')
        return rows[0]
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