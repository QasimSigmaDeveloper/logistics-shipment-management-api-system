import { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { NotificationService } from "./notification.service";


const getMyNotifications = asyncHandler(
async (req: any, res: Response) => {

    const result =
        await NotificationService
        .getMyNotifications(req.user.id);


    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Notifications retrieved successfully",
        data: result,
    });

});


const markAsRead = asyncHandler(
async (req: Request, res: Response) => {

    const result =
        await NotificationService
        .markAsRead(req.params.id as string);


    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Notification marked as read",
        data: result,
    });

});

export const NotificationController = {
    getMyNotifications,
    markAsRead,
};