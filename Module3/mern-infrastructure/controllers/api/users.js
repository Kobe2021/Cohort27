const User = require('../../models/user')
const jwt = require('jsonwebtoken')

async function create(req, res) {
 try {
  // Add the user to the database
  const user = await User.create(req.body)
  // Create JWT token
  const token = createJWT(user)
  // send token to client
  res.json(token)
 } catch (err) {
  console.log(err);
  res.status(400).json(err)
 }
}


/*-- Helper Functions --*/
function createJWT(user){
  return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'})
}

module.exports = {
    create
}