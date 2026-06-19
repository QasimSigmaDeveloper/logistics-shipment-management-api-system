import { Router } from "express";
import { NotificationController } from "./notification.controller";
import auth from "../../middleware/auth.middleware";
import authorize from "../../middleware/role.middleware";
import { UserRole } from "../user/user.interface";

const router = Router();

/**
 * @swagger
 * /notifications/my-notifications:
 *   get:
 *     tags:
 *       - Notifications
 *     summary: Get current user notifications
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Notifications retrieved
 */

router.get(
  "/my-notifications",
  auth,
  authorize(
    UserRole.ADMIN,
    UserRole.AGENT,
    UserRole.CUSTOMER
  ),
  NotificationController.getMyNotifications
);

/**
 * @swagger
 * /notifications/{id}/read:
 *   patch:
 *     tags:
 *       - Notifications
 *     summary: Mark notification as read
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Notification marked as read
 */

router.patch(
  "/:id/read",
  auth,
  authorize(
    UserRole.ADMIN,
    UserRole.AGENT,
    UserRole.CUSTOMER
  ),
  NotificationController.markAsRead
);

export default router;