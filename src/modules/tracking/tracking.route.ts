import { Router } from "express";
import { TrackingController } from "./tracking.controller";
import auth from "../../middleware/auth.middleware";
import authorize from "../../middleware/role.middleware";
import { UserRole } from "../user/user.interface";

const router = Router();

/**
 * @swagger
 * /tracking/{shipmentId}:
 *   get:
 *     tags:
 *       - Tracking
 *     summary: Get shipment tracking history
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: shipmentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tracking history retrieved successfully
 */

router.get(
    "/:shipmentId",
    auth,
    authorize(
        UserRole.ADMIN,
        UserRole.AGENT,
        UserRole.CUSTOMER
    ),
    TrackingController.getShipmentTracking
);


export default router;