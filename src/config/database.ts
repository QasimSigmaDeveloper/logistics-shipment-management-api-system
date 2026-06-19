import mongoose from "mongoose";
const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URL as string);
        console.log("Database Connected");
    }catch(err){
        console.log("Database Error: ", err)
        process.exit(1);
    }
}
export default dbConnection;