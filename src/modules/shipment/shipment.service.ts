import Shipment from "./shipment.model";
import { IShipment } from "./shipment.interface";
import generateTrackingId from "./shipment.utils";
import Tracking from "../tracking/tracking.model";
import { ShipmentStatus } from "./shipment.interface";
import AppError from "../../utils/AppError";
import { NotificationService } from "../notification/notification.service";


const createShipment = async (
    payload: Partial<IShipment>,
    customerId: string,
) => {
    const ShipmentData = {
        ...payload,
        trackingId:generateTrackingId(),
        customer:customerId,
    }
    const shipment = await Shipment.create(ShipmentData)
    await NotificationService.createNotification(
        shipment.customer.toString(),
        `Your shipment ${shipment.trackingId} has been created successfully`
);
    return shipment;
}

const getMyShipments = async(
    customerId:string,
) =>{
    const shipment = await Shipment.find({
        customer:customerId,
    }).sort({
        createdAt:-1,
    })
    return shipment;
}

const trackShipment = async (
    trackingId:string,
) =>{
    const shipment = await Shipment.findOne({
        trackingId,
    });
    if(!shipment){
        throw new AppError("Shipment Not Found",404);
    }
    return shipment;
}

const updateShipmentStatus = async(
    shipmentId: string,
    status:ShipmentStatus,
    userId:string,
    note?:string,
) => {
    const shipment = await Shipment.findById(shipmentId);
    if(!shipment){
        throw new AppError("Shipment Not Found",404)
    }
    shipment.status = status;
    await shipment.save();
    await NotificationService.createNotification(
        shipment.customer.toString(),
       `Your shipment status has changed to ${status}`
);

    await Tracking.create({
        shipment:shipment._id,
        status,
        updatedBy:userId,
        note,
    })
    return shipment;
}

export const ShipmentService = {
    createShipment,
    getMyShipments,
    trackShipment,
    updateShipmentStatus,
}