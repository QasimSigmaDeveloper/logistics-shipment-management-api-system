import {Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { ReportService } from "./report.service";


const getDailyShipments = asyncHandler(
    async (req:Request, res: Response) => {

        const result =
            await ReportService.getDailyShipments();


        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Daily shipment report retrieved successfully",
            data: result,
        });
    }
);


const getDeliveredOrders = asyncHandler(
    async (req:Request, res: Response) => {

        const result =
            await ReportService.getDeliveredOrders();


        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Delivered orders report retrieved successfully",
            data: result,
        });
    }
);


const getPendingOrders = asyncHandler(
    async (req:Request, res: Response) => {

        const result =
            await ReportService.getPendingOrders();


        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Pending orders report retrieved successfully",
            data: result,
        });
    }
);


const getWarehouseUtilization = asyncHandler(
    async (req:Request, res: Response) => {

        const result =
            await ReportService
                .getWarehouseUtilization();


        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Warehouse utilization report retrieved successfully",
            data: result,
        });
    }
);


export const ReportController = {
    getDailyShipments,
    getDeliveredOrders,
    getPendingOrders,
    getWarehouseUtilization,
};