import app from "./app";
import dotenv from "dotenv"
dotenv.config()
import dbConnection from "./config/database";

const PORT = process.env.PORT || 5000;

const serverStart = async ()=>{
    await dbConnection();
    app.listen(PORT,()=>{
        console.log(`Server running on Port: ${PORT}`);
    });
}

serverStart();