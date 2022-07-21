const express = require('express')
const router = express.Router()
const passport = require('passport')
const authMiddlewares = require('../../middlewares/authMiddlewares.js')
const userControllers = require('../../controllers/userControllers.js')

/**
 * @route POST api/user/register
 * @description Register user
 * @access Public
 */
router.post('/register', userControllers.Register)

/**
 * @route POST api/user/login
 * @description Login user
 * @access Public
 */
router.post('/login', passport.authenticate('local', { successRedirect: '/api/user/login/success', failureRedirect: '/api/user/login/failure' }))

/**
 * @rotue GET api/user/login/success
 * @description Login success route
 * @access Private
 */
router.get('/login/success', (req, res, next) => {
	res.status(200).json({ message: 'You are successfully loged in.' })
})

/**
 * @rotue GET api/user/login/failure
 * @description Login failure route
 * @access Public
 */
router.get('/login/failure', (req, res, next) => {
	res.status(400).json({ message: 'Invalid username or password' })
})

/**
 * @route GET api/user/dashboard
 * @description Go to user dashboard
 * @access Private
 */
router.get('/dashboard', authMiddlewares.isAuthenticated, userControllers.userDashboard)

/**
 * @route POST api/user/logout
 * @description Logout user
 * @access Private
 */
router.post('/logout', userControllers.Logout)

module.exports = router
