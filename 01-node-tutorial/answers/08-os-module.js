const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//hostname of the operating system
const host = os.hostname()
console.log(host)

//info about system architecture
const architech = os.arch()
console.log(architech)