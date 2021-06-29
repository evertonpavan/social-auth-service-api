require('dotenv').config()

// load authorization keys
const configAuth = require('./auth')

const GoogleStrategy = require('passport-google-oauth20').Strategy

module.exports = function (passport) {

  /*             Google sign up              */
  passport.use(
    new GoogleStrategy(
      {
        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackURL,
      },

      async (accessToken, refreshToken, profile, done) => {
        // console.log("profile", profile)
        //get the user data from google 
        const userProfile = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
          email: profile.emails[0].value
        }

        try {

          return done(null, userProfile);

        } catch (err) {
          console.error(err)
          return done(null, err);
        }
      }
    )
  )

  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  // used to deserialize the user
  passport.deserializeUser((user, done) => {
    done(null, user)
  })
}