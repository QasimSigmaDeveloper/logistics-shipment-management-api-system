import { Types } from "mongoose";

export interface IWarehouse {
    name:string;
    location:string;
    capacity:number;
    currentLoad:number;
    shipments:Types.ObjectId[];
}