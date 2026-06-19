import { Request, Response } from "express";
import { TrackingService } from "./tracking.service";
import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";


const getShipmentTracking = asyncHandler(
    async (req: Request, res: Response) => {

        const result =
            await TrackingService.getShipmentTracking(
                req.params.shipmentId as string,
            );


        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Tracking history retrieved successfully",
            data: result,
        });
    }
);


export const TrackingController = {
    getShipmentTracking,
};