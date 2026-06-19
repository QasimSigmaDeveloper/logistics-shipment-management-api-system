import AppError from "../../utils/AppError";
import Warehouse from "./warehouse.model";
import { NotificationService } from "../notification/notification.service";
import Shipment from "../shipment/shipment.model";

const createWarehouse = async (payload:any)=>{
    return await Warehouse.create(payload)
}

const getAllWareHouses = async ()=>{
    return await Warehouse.find().populate("shipments");
}

const assignShipment = async (
    warehouseId:string,
    shipmentId:string,
) =>{
    const warehouse = await Warehouse.findById(warehouseId);
    if(!warehouse){
        throw new AppError("Warehouse not Found",404);
    }
    if(warehouse.currentLoad >= warehouse.capacity){
        throw new AppError("Warehouse is full",507);
    }
    const shipment = await Shipment.findById(shipmentId)
    if(!shipment){
        throw new AppError("Shipment not Found", 404);
    }

    warehouse.shipments.push(shipmentId as any)
    warehouse.currentLoad += 1;
    await warehouse.save();
    await NotificationService.createNotification(
       shipment.customer.toString(),
       "Your shipment reached our warehouse"
);
    return warehouse;
}

export const WarehouseServices = {
    createWarehouse,
    getAllWareHouses,
    assignShipment,
} 
