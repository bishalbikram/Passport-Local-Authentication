const authMiddlewares = {}

authMiddlewares.isAuthenticated = async (req, res, next) => {
    try {
	if(req.isAuthenticated()) {
	    next()
	} else {
	    res.status(400).json({ message: 'You are not authorized to view this resource.' })
	}	
    } catch (err) {
	next(err)
    }
}

module.exports = authMiddlewares
