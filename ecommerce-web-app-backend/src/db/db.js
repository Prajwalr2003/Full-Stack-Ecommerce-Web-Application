const mongoose = require('mongoose');
const {DB_NAME} = require('../constants.js');

const connectDB = async () => {
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`MONGODB connected !! DB_HOST: ${connectionInstance.connection.host}`);
  }catch(err){
    console.error("MONGODB connection FAILED ", err );
    process.exit(1);
  }
}

module.exports = connectDB;