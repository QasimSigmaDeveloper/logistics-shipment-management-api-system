import {  Response } from "express";

interface ApiResponse<T>{
    success:boolean;
    statusCode:number;
    message:string;
    data?:T;
}

const sendResponse =<T>(
    res:Response,
    data:ApiResponse<T>
)=>{
    res.status(data.statusCode).json({
        success:data.success,
        message:data.message,
        data:data.data,
    })
}
export default sendResponse;