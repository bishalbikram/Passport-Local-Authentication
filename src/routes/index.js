const express = require('express')
const router = express.Router()

// User route
const userRoutes = require('./api/user.js')
router.use('/user', userRoutes)

module.exports = router
