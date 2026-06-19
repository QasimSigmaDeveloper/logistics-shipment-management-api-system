import AppError from "../../utils/AppError";
import Tracking from "./tracking.model";

const getShipmentTracking = async (shipmentId: string) => {

    const trackingHistory = await Tracking.find({
        shipment: shipmentId,
    })
    .populate("updatedBy", "name email role")
    .sort({
        createdAt: 1,
    });

    if (!trackingHistory.length) {
        throw new AppError( "Tracking history not found",404);
    }

    return trackingHistory;
};


export const TrackingService = {
    getShipmentTracking,
};