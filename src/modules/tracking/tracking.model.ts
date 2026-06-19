import { Schema, model } from "mongoose";
import { ITracking } from "./tracking.interface";
import { ShipmentStatus } from "../shipment/shipment.interface";

const trackingSchema = new Schema<ITracking>({
    shipment:{
        type:Schema.Types.ObjectId,
        ref:"Shipment",
        required:true,
    },
    status:{
        type:String,
        enum:Object.values(ShipmentStatus),
        required:true,
    },
    updatedBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,

    },
    note:{
        type:String,
    }
},
    {
        timestamps:true,
    }
);

const Tracking = model<ITracking>("Tracking",trackingSchema);

export default Tracking;