const express = require('express')
const app = express()
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const routes = require('./routes/index.js')
require('./db/mongoose.js')

// Parse application/json
app.use(express.json())

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({
	extended: true
}))

// Session store
const sessionStore = MongoStore.create({
	mongoUrl: process.env.MONGO_URI,
	dbName: process.env.DB_NAME,
	collectionName: 'sessions'
})

// Session middlewre
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	store: sessionStore,
	cookie: {
		path: '/',
		httpOnly: true,
		secure: false,
		maxAge: 1000 * 60 * 60 * 24 
	}
}))

// Initialize passport
require('./helpers/passportHelpers.js')
app.use(passport.initialize())
app.use(passport.session())

// Use routes
app.use('/api', routes)

// Catch 404 error and forward to Error handler
app.use((req, res, next) => {
	const err = new Error('Not found')
	err.status = 404
	next(err)
})

// Error handler 
app.use((err, req, res, next) => {
	const status = err.status || 400
	res.status(status).json({ error: err.message })
})

module.exports = app 
