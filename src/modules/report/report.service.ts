import Shipment from "../shipment/shipment.model";
import { ShipmentStatus } from "../shipment/shipment.interface";
import Warehouse from "../warehouse/warehouse.model";


const getDailyShipments = async () => {

    const result = await Shipment.aggregate([
        {
            $group: {
                _id: {
                    $dateToString: {
                        format: "%Y-%m-%d",
                        date: "$createdAt",
                    },
                },
                totalShipments: {
                    $sum: 1,
                },
            },
        },
        {
            $sort: {
                _id: -1,
            },
        },
    ]);

    return result;
};


const getDeliveredOrders = async () => {

    const result = await Shipment.find({
        status: ShipmentStatus.DELIVERED,
    });

    return result;
};


const getPendingOrders = async () => {

    const result = await Shipment.find({
        status: {
            $ne: ShipmentStatus.DELIVERED,
        },
    });

    return result;
};


const getWarehouseUtilization = async () => {

    const result = await Warehouse.aggregate([
        {
            $project: {
                name: 1,
                capacity: 1,
                currentLoad: 1,

                utilizationPercentage: {
                    $multiply: [
                        {
                            $divide: [
                                "$currentLoad",
                                "$capacity",
                            ],
                        },
                        100,
                    ],
                },
            },
        },
    ]);

    return result;
};


export const ReportService = {
    getDailyShipments,
    getDeliveredOrders,
    getPendingOrders,
    getWarehouseUtilization,
};