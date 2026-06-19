import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";

const globalErrorHandler = (
    error: Error | AppError,
    req:Request,
    res:Response,
    next:NextFunction
) =>{
    let statusCode = 500;
    let message = "Internal Server Error";

    if(error instanceof AppError){
        statusCode = error.statusCode;
        message = error.message;
    }else {
        message = error.message;
    }

    res.status(statusCode).json({
        success:false,
        message,
    })
}

export default globalErrorHandler;