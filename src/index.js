require('dotenv').config({ path: './config/.env' })
const http = require('http')
const app = require('./app.js')
const server = http.createServer(app)
const port = process.env.PORT || 5050

server.listen(port, () => {
	console.log(`Server is listening on port ${port}`)
})
