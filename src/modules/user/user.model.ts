import mongoose, { Schema,} from "mongoose";
import { IUser,UserRole } from "./user.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<IUser>({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    role:{
        type:String,
        enum:Object.values(UserRole),
        default:UserRole.CUSTOMER,
    }
},
    {
        timestamps:true,
    }
);

userSchema.pre("save", async function (this: IUser) {
    if (!this.isModified("password")) {
        return; 
    }

    this.password = await bcrypt.hash(this.password, 10);
    
});

const User = mongoose.model<IUser>('Users',userSchema);

export default User;