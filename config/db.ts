import mongoose from "mongoose";
import constant from "./default.json";

const connectDB = async () => {
    try {
      mongoose.connect(constant.mongoURI,
      { })
      .then((res) =>{
        console.log('Hurry Database Connected');
      })
      .catch((err)=>{
       console.log('Database nt Connected!!',err)
      });
    } catch (err) {
        console.error(err);
        // Exit process with failure
        process.exit(1);
    }
};

export default connectDB;  