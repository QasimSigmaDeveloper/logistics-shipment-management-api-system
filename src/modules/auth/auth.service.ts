import bcrypt from "bcrypt";
import User from '../user/user.model';
import {IUser} from '../user/user.interface';
import { generateAccessToken,generateRefreshToken } from "../../utils/jwt";
import AppError from "../../utils/AppError";

const register = async (payload:IUser)=>{
    const exsitingUser = await User.findOne({email:payload.email});
    if(exsitingUser){
        throw new AppError("Email Already Exists",409)
    }
    const user = await User.create(payload);
    return user;
}

const login = async (email:string,password:string)=>{
    const user = await User.findOne({
        email,
    }).select("+password");
    if(!user){
        throw new AppError("Ivalid credentials",401);
    }

    const isPasswordMatch = await bcrypt.compare(password,user.password);
    if(!isPasswordMatch){
        throw new AppError("Invalid credentials",401)
    }
    const payload = {
       id: user._id,
       role: user.role
    }

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);
    return {
        user:{
            id:user._id,
            name:user.name,
            role:user.role,
        },
        accessToken,
        refreshToken,
    }

}

export const AuthService = {
  register,
  login,
};