require('dotenv').config()

module.exports = {

    "googleAuth": {
        "clientID": process.env.GOOGLE_CLIENT_ID,
        "clientSecret": process.env.GOOGLE_CLIENT_SECRET,
        "callbackURL": `/api/v1/auth/google/callback`,
    },

};