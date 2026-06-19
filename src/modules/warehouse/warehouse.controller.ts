import { Response, Request } from "express";
import { WarehouseServices } from "./warehouse.service";
import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";

const createWarehouse = asyncHandler(
    async(req:Request,res:Response) =>{
        const result = await WarehouseServices.createWarehouse(
            req.body,
        )
        sendResponse(res,{
            success:true,
            statusCode:201,
            message:"Warehouse Created Suuccessfully",
            data:result,
        })
    }
)

const getAllWareHouses = asyncHandler(
    async(req:Request,res:Response)=>{
        const result = await WarehouseServices.getAllWareHouses();
    
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Get All Warehouses Suuccessfully",
        data:result,
    })
    }
)

const assignShipment = asyncHandler(
    async(req:Request,res:Response)=>{
        const result = await WarehouseServices.assignShipment(
            req.params.id as string,
            req.body.shipmentId,
        )
        sendResponse(res,{
            success:true,
            statusCode:201,
            message:"shipment assign successfully",
            data:result,
        })
    }
)

export const WarehouseController = {
    createWarehouse,
    getAllWareHouses,
    assignShipment,
}