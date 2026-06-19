import { Response, Request, NextFunction } from "express";
import { UserRole } from "../modules/user/user.interface";
import AppError from "../utils/AppError";

const authorize = (...roles:UserRole[])=>{
    return (
        req:Request,
        res:Response,
        next:NextFunction,
    )=>{
        if(!req.user){
            next(
                new AppError("Unauthorized",401)
            )
        }
        if(!roles.includes(req.user?.role!)){
             next(
                new AppError("You don't have Permission",403)
             )
        }
        next();
    }

}

export default authorize;