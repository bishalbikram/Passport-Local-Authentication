const crypto = require('crypto')

passwordHelpers = {}

passwordHelpers.hashPassword = function(password) {
	const salt = crypto.randomBytes(32).toString('hex')
	const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
	return {
		salt,
		hash
	}
}

passwordHelpers.validatePassword = function(password, salt, hash) {
	const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
	return hash === hashVerify
}


module.exports = passwordHelpers
