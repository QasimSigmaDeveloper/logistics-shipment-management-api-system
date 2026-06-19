import { Response, Request } from "express";
import { ShipmentService } from "./shipment.service";
import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import Shipment from "./shipment.model";

const createShipment = asyncHandler(
    async (
        req:Request,
        res:Response,
    )=>{
        const customerId = req.user?.id as string;
        const result = await ShipmentService.createShipment(
            req.body,
            customerId,
        );
        sendResponse(res,{
            success:true,
            statusCode:201,
            message:"Shipment Created Successfully",
            data:result,
        });
    }
)

const getMyShipments = asyncHandler(
    async(req:Request,res:Response)=>{
        const customerId = req.user?.id as string;
        const result = await ShipmentService.getMyShipments(customerId);
        sendResponse(res,{
            success:true,
            statusCode:200,
            message:"Shipment Fetch Successfully",
            data:result,
        })
    }
)

const trackShipment = asyncHandler(
    async(req:Request,res:Response)=>{
        const result = await ShipmentService.trackShipment(req.params.trackingId as string);
        sendResponse(res,{
            success:true,
            statusCode:200,
            message:"Your Shipment tracking details",
            data:result,
        })
        
    }
)

const updateShipmentStatus = asyncHandler(
    async(req:Request,res:Response)=>{
        const result = await ShipmentService.updateShipmentStatus(
            req.params.id as string,
            req.body.status,
            req.user?.id as string,
            req.body.note,
        )
        sendResponse(res,{
            success:true,
            statusCode:200,
            message:"Shipment Status Updated",
            data:result,
        })
    }
    
)


 export const shipmentController = {
    createShipment,
    getMyShipments,
    trackShipment,
    updateShipmentStatus,
 } 