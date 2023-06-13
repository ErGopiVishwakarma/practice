const express = require('express');
const app = express();
const cors=require('cors')
const cookieSession = require('cookie-session');
const passport = require('./passport');
const session=require('express-session')

app.use(cookieSession({
	name: 'google-auth-session',
	keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())
app.use(session({
    secret: 'keyboard cat', 
    resave: false,
    saveUninitialized: true
  }))

app.get('/', (req, res) => {
	res.send("<button><a href='/auth'>Login With Google</a></button>")
});


app.get('/auth',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
	console.log(req.user)
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  app.get('/auth/google',(req,res)=>{
    console.log(res.profile)
    // console.log(res)
    res.send('success')
  })








app.listen(4000 , () => {
	console.log("Server Running on port 4000");
});
