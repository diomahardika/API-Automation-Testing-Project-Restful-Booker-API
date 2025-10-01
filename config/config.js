require('dotenv').config()

const config = {
  baseUrl : process.env.BASE_URL,
  credentials : {
    username : process.env.ENV_USERNAME,
    password : process.env.ENV_PASSWORD
  },
  headers : {
    contentType : 'application/json',
    accept : 'application/json'
  } 
}
module.exports = config