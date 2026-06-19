import Delivery from "./delivery.model";
import Shipment from "../shipment/shipment.model";
import { NotificationService } from "../notification/notification.service";
import AppError from "../../utils/AppError";

const assignShipment = async (
  shipmentId: string,
  agentId: string
) => {

  const delivery = await Delivery.create({
    shipment: shipmentId,
    agent: agentId,
  });
  await NotificationService.createNotification(
               agentId,
              "A new shipment has been assigned to you"
);

  return delivery;
};



const getAgentShipments = async (
  agentId: string
) => {

  return await Delivery.find({
    agent: agentId,
  })
    .populate("shipment")
    .populate("agent", "-password");
};



const submitProof = async (
  deliveryId: string,
  proof: string
) => {

  const delivery =
    await Delivery.findByIdAndUpdate(
      deliveryId,
      {
        deliveryProof: proof,
        status: "completed",
      },
      {
        new: true,
      }
    );

    if (!delivery) {
    throw new AppError("Delivery record not found", 404);
    }
    const shipment = await Shipment.findById(delivery.shipment);
    if (!shipment || !shipment.customer) {
    throw new AppError("Associated shipment or customer not found", 404);
  }
  await NotificationService.createNotification(
       shipment.customer.toString(),
       "Your package has been delivered successfully"
);

  return delivery;
};

export const DeliveryService = {
  assignShipment,
  getAgentShipments,
  submitProof,
};