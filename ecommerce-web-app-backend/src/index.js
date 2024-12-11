require('dotenv').config();
const app = require('./app');
const connectDB = require('./db/db');

connectDB()
.then(()=>{
  app.on("error", (error)=>{
    console.log("ERROR: ", error);
    throw error;
  })
  app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is listening on PORT : ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGODB connection FAILED ", err);
})