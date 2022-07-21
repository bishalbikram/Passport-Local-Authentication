# Passport-Local-Authentication
A NodeJS authentication system for handling user authentication using Passport Local Strategy. 

## Language & Tools
- [Node.js](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Express-session](https://www.npmjs.com/package/express-session)
- [Connect-mongo](https://www.npmjs.com/package/connect-mongo)
- [Passport](https://www.npmjs.com/package/passport)
- [Passport-local](https://www.npmjs.com/package/passport-local)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Installation Process
1. Clone the repo using this command
  ```
  git clone https://github.com/bishalbikram/Passport-Local-Authentication.git
  ```
    
2. Change directory
  ```
  cd Passport-Local-Authentication
  ```
    
3. Install npm packages
  ```
  npm install 
  ```
  
## Setup
```
1. Create config folder

2. Create .env file inside config folder inluding: 

  * PORT=5050
  * MONGO_URI=mongodb://127.0.0.1:27017/passportlocal
  * SESSION_SECRET=***********
  * DB_NAME=passportlocal

3. Setup up a local MongoDB database  
```
## Start Development
```
npm run dev
```
