const mongoose = require('mongoose');

const connectDB = async (url) => {
  try{
    await mongoose.connect(url), {
      useNewParser: true,
      useUnifiedTopology: true,
    }
    console.log('Connected successfuly')
  } catch (error){
    console.error('Connect MongoDB error', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
