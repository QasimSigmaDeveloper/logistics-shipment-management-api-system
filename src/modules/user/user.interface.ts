import { Document } from "mongoose";
export enum UserRole {
    CUSTOMER = "customer",
    AGENT = "agent",
    ADMIN = "admin",
}
export interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    role:UserRole;
    createdAt?:Date;
    updatedAt?:Date;
}