const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')


const register = async (req, res) => {
  const user = await User.create( {...req.body })
  res.json({ user: { name: user.name }})
  // const user = req.body
  // res.json(user)
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.send('Please provide email and password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    res.send('Invalid Credentials')
  }
  // const isPasswordCorrect = await user.comparePassword(password)
  // if (!isPasswordCorrect) {
  //   res.send('Invalid Credentials')
  // }
  
  res.status(StatusCodes.OK).json({ user: { name: user.name } })
}

module.exports = {
  register,
  login,
}
