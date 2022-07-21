const passport = require('passport')
const LocalStrategy = require('passport-local')
const passwordHelpers = require('./passwordHelpers.js')
const User = require('../models/user.js')

// Pass custom fields to Verify callback  
const customFields = {
	usernameField: 'username',
	passwordField: 'password'
}

// Verify callback function for Local strategy 
const verifyCallback = async (username, password, done) => {
	
	try {
		const user = await User.findOne({ username })
	
		if(!user) {
			return done(null, false)
		}
		
		const isValidPassword = passwordHelpers.validatePassword(password, user.salt, user.hash)
	
		if(!isValidPassword) {
			return done(null, false)
		}
		
		return done(null, user)

	} catch (err) {
		done(err)
	}	
}

// Local strategy 
const strategy = new LocalStrategy(customFields, verifyCallback)

// Set Local strategy for authentication 
passport.use(strategy)

// Get user ID from Database and insert into req.Session.passport.user
passport.serializeUser((user, done) => {
	done(null, user.id)
})

// Get user ID from req.Session.passport.user and populate req.user from database 
passport.deserializeUser(async (userId, done) => {
	try {
		const user = await User.findById(userId)

		done(null, user)

	} catch (err) {
		done(err)
	}
})

