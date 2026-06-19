import { Schema, model } from "mongoose";
import { ShipmentStatus, IShipment } from "./shipment.interface";

const shipmentSchema = new Schema<IShipment>({
    trackingId:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    senderName:{
        type:String,
        required:true,
        trim:true,
    },
    senderPhone:{
        type:String,
        required:true
    },
    receiverName: {
      type: String,
      required: true,
      trim: true,
    },
    receiverPhone: {
      type: String,
      required: true,
    },
    packageType: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
      min: 0,
    },
    deliveryAddress: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: Object.values(ShipmentStatus),
      default: ShipmentStatus.CREATED,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedAgent: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    warehouse: {
      type: Schema.Types.ObjectId,
      ref: "Warehouse",
    },
    deliveryProof: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Shipment = model<IShipment>("Shipment",shipmentSchema);

export default Shipment;

