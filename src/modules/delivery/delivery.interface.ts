import { Types } from "mongoose";

export enum DeliveryStatus {
    ASSIGNED="assigned",
    COMPLETED="completed",
}

export interface IDelivery{
    shipment:Types.ObjectId,
    agent:Types.ObjectId,
    status:DeliveryStatus,
    deliveryProof?:string,
}
