import Jwt from "jsonwebtoken";

export const generateAccessToken = (payload:object)=>{
    return Jwt.sign(
        payload,
        process.env.JWT_ACCESS_SECRET as string,
        {
            expiresIn:"1d",
        }
    )
}

export const generateRefreshToken = (
    payload:object
)=>{
    return Jwt.sign(
        payload,
        process.env.JWT_REFRESH_SECRET as string,
        {
            expiresIn:"7d",
        }
    )
}