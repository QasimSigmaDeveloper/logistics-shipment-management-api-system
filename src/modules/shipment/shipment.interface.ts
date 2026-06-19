import { Types } from "mongoose";

export enum ShipmentStatus {
    CREATED = "Created",
    PICKED_UP = "Picked Up",
    IN_WAREHOUSE = "In Warehouse",
    OUT_FOR_DELIVERY = "Out for Delivery",
    DELIVERED = "Delivered"
}

export interface IShipment {
    trackingId:string;

    senderName:string;
    senderPhone:string;

    receiverName:string;
    receiverPhone:string;

    packageType:string;
    weight:number;

    deliveryAddress:string;

    status:ShipmentStatus;

    customer:Types.ObjectId;
    assignedAgent?:Types.ObjectId;
    warehouse?:Types.ObjectId;
    deliveryProof?:string;

    createdAt?:Date;
    updatedAt?:Date;
}