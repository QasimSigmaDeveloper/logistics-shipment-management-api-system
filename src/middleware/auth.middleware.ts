import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";
import verifyToken from "../utils/verifyToken";

const auth =(
    req:Request,
    res:Response,
    next:NextFunction,
)=>{
    const authorization = req.headers.authorization;
    if(!authorization){
        return next(
            new AppError("You are not authorize",401)
        )
    }
    const token = authorization.split(" ")[1];
    if(!token){
        return next(
            new AppError("Invalid Token format",401)
        )
    }
        try{
            const decode = verifyToken(token) as {
                id:string;
                role:any;
            }
            req.user = {
                id:decode.id,
                role:decode.role,
            }
            next();
        }catch(error){
            next(
                new AppError("Token is Invalid or Expired",401)
            )
        }
}

export default auth;