const jwt = require('jsonwebtoken');
const {BadRequestError} = require('../errors');

const login = async (req, res) => {
    const {username, password} = req.body;

    if(!username|| !password){
        throw new BadRequestError('Please provide email and password')
    }

//for demo
    const id = new Date().getDate();
//!in production need to us long, complex and unguessable string value!
//smaller payload-=better user experience 
const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {expiresIn: '30d',})

    res.status(200).json({msg:'user created', token})
}

const dashboard = async (req,res) => {

    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({
        msg:`Hi, ${req.user.username}`, 
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login, dashboard
}