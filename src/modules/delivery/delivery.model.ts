import { IDelivery, DeliveryStatus } from "./delivery.interface";
import { Schema, model } from "mongoose";

const deliverySchema = new Schema<IDelivery>({
    shipment: {
      type: Schema.Types.ObjectId,
      ref: "Shipment",
      required: true,
    },
    agent: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(DeliveryStatus),
      default: DeliveryStatus.ASSIGNED,
    },
    deliveryProof: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Delivery = model<IDelivery>("Delivery",deliverySchema);
export default Delivery;