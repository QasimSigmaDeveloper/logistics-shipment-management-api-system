import AppError from "../../utils/AppError";
import Notification from "./notification.model";


const createNotification = async (
    userId: string,
    message: string
) => {
    return await Notification.create({
        user: userId,
        message,
    });
};


const getMyNotifications = async (
    userId: string
) => {

    const notifications =
        await Notification.find({
            user: userId,
        })
        .sort({
            createdAt: -1,
        });


    return notifications;
};


const markAsRead = async (
    notificationId: string
) => {

    const notification =
        await Notification.findByIdAndUpdate(
            notificationId,
            {
                isRead: true,
            },
            {
                new: true,
            }
        );


    if (!notification) {
        throw new AppError(
            "Notification not found",
            404
        );
    }


    return notification;
};


export const NotificationService = {
    createNotification,
    getMyNotifications,
    markAsRead,
};