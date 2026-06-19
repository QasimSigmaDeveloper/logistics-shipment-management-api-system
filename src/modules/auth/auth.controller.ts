import { Request,Response } from "express";
import {AuthService} from "./auth.service";
import asyncHandler from "../../utils/asyncHandler";

const register = asyncHandler(
    async (
    req:Request,
    res:Response,
)=>{
    const result = await AuthService.register(req.body);
    res.status(201).json({
        success:true,
        message:"User created successfully",
        data:result,
    })
}
)

const login = asyncHandler(
    async (
    req:Request,
    res:Response,
)=>{
    const result = await AuthService.login(req.body.email,req.body.password);
    res.status(200).json({
        success:true,
        message:"Login Successful",
        data:result,
    });
}
)

export const AuthController = {
    register,
    login,
};