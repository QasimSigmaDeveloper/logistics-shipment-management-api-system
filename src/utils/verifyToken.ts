import Jwt from "jsonwebtoken";
const verifyToken = (
    token:string
) =>{
    return Jwt.verify(
        token,
        process.env.JWT_ACCESS_SECRET as string
    )
}
export default verifyToken;