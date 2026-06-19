import { Types } from "mongoose";
import { ShipmentStatus } from "../shipment/shipment.interface";

export interface ITracking {
    shipment: Types.ObjectId;
    status:ShipmentStatus;
    updatedBy:Types.ObjectId;
    note?:string;

    createdAt?:Date;
    updatedAt?:Date;
}
