import { Router } from "express";
import { DeliveryController } from "./delivery.controller";
import auth from "../../middleware/auth.middleware";
import authorize from "../../middleware/role.middleware";
import { UserRole } from "../user/user.interface";

const router = Router();

/**
 * @swagger
 * /deliveries/assign:
 *   post:
 *     tags:
 *       - Deliveries
 *     summary: Assign shipment to delivery agent
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Shipment assigned to agent
 */

router.post(
  "/assign",
  auth,
  authorize(UserRole.ADMIN),
  DeliveryController.assignShipment
);

/**
 * @swagger
 * /deliveries/my-shipments:
 *   get:
 *     tags:
 *       - Deliveries
 *     summary: Get agent assigned shipments
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Agent shipments retrieved
 */

router.get(
  "/my-shipments",
  auth,
  authorize(UserRole.AGENT),
  DeliveryController.myShipments
);

/**
 * @swagger
 * /deliveries/{id}/proof:
 *   patch:
 *     tags:
 *       - Deliveries
 *     summary: Submit delivery proof
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
 *         description: Delivery completed
 */

router.patch(
  "/:id/proof",
  auth,
  authorize(UserRole.AGENT),
  DeliveryController.submitProof
);


export default router;