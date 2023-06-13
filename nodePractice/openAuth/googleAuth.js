const passport=require('passport')

const CLIENT_ID="279410785735-ebf4oogk3oar7d8hmufpm3lkl0tmfpmi.apps.googleusercontent.com";
const CLIENT_SECRET="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"

const GoogleStrategy = require('passport-google-oauth20').Strategy;




passport.serializeUser((user,done)=>{
  //user.id is not profile id. it is id that created by the database
      done(null,user.id)
  })
  passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    })
})

passport.use(new GoogleStrategy({
    clientID:CLIENT_ID,
    clientSecret:CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google"
  },
  async function(accessToken, refreshToken, profile, cb) {   
    console.log(profile)
      return cb(null, profile);    
  }
));

module.exports=passport