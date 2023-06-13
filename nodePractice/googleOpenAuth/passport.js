const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const CLIENT_ID="279410785735-ebf4oogk3oar7d8hmufpm3lkl0tmfpmi.apps.googleusercontent.com";
const CLIENT_SECRET="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"

passport.serializeUser((user , done) => {
  console.log(user)
	done(null , user);
})
passport.deserializeUser(function(user, done) {
  console.log(user)
	done(null, user);
});

passport.use(new GoogleStrategy({
    clientID:CLIENT_ID,
    clientSecret:CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google"
  },
  async function(accessToken, refreshToken, profile, cb) {   
  
      return cb(profile);    
  }
));



module.exports=passport