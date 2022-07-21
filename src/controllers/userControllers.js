const User = require('../models/user.js')
const passwordHelpers = require('../helpers/passwordHelpers.js')
const userControllers = {}


userControllers.Register = async (req, res, next) => {
	try {
		const { username, password } = req.body

		const user = await User.findOne({ username  })

		if(user) {
			return res.status(400).json({ message: 'User already exists.' })
		}

		const hashPassword = passwordHelpers.hashPassword(password)

		const newUser = new User({
			username,
			salt: hashPassword.salt,
			hash: hashPassword.hash
		})

		const saveUser = await newUser.save()
		
		return res.status(201).json({
			success: true,
			message: 'user registered successfully.',
			user: newUser
		})
	
	} catch (err) {
		next(err)
	}
}

userControllers.userDashboard = async (req, res, next) => {
	return res.status(200).json({ message: 'You are inside User Dashboard!' })
}

userControllers.Logout = async (req, res, next) => {
	req.logout(function(err) {
		if(err) {
			return next(err)
		}
		res.redirect('/api/user/dashboard')
	})
}

module.exports = userControllers
