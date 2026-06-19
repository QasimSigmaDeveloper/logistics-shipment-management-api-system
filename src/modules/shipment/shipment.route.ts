import { shipmentController } from "./shipment.controller";
import auth from "../../middleware/auth.middleware";
import authorize from "../../middleware/role.middleware";
import { UserRole } from "../user/user.interface";
import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /shipments:
 *   post:
 *     tags:
 *       - Shipments
 *     summary: Create a new shipment
 *     description: Customer can create a new shipment
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Shipment'
 *     responses:
 *       201:
 *         description: Shipment created successfully
 *       401:
 *         description: Unauthorized
 */

router.post(
    '/',
    auth,
    authorize(UserRole.CUSTOMER),
    shipmentController.createShipment
);

/**
 * @swagger
 * /shipments/my:
 *   get:
 *     tags:
 *       - Shipments
 *     summary: Get customer shipments
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Shipments retrieved successfully
 */

router.get(
    '/my',
    auth,
    authorize(UserRole.CUSTOMER),
    shipmentController.getMyShipments,
)



router.get(
    '/track/:trackingId',
    shipmentController.trackShipment,
)

/**
 * @swagger
 * /shipments/{shipment._id}/status:
 *   patch:
 *     tags:
 *       - Shipments
 *     summary: Update shipment status
 *     description: Admin or Agent can update shipment status
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
 *         description: Shipment status updated
 */

router.patch(
    '/:id/status',
    auth,
    authorize(UserRole.ADMIN,UserRole.AGENT),
    shipmentController.updateShipmentStatus,
)
export default router;