import { Router } from "express";
import { WarehouseController } from "./warehouse.controller";
import auth from "../../middleware/auth.middleware";
import authorize from "../../middleware/role.middleware";
import { UserRole } from "../user/user.interface";

const router = Router();

/**
 * @swagger
 * /warehouses:
 *   post:
 *     tags:
 *       - Warehouses
 *     summary: Create warehouse
 *     description: Only admin can create warehouses
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Warehouse created successfully
 */

router.post(
    '/',
    auth,
    authorize(UserRole.ADMIN),
    WarehouseController.createWarehouse,
)

/**
 * @swagger
 * /warehouses:
 *   get:
 *     tags:
 *       - Warehouses
 *     summary: Get all warehouses
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Warehouses fetched successfully
 */

router.get(
    '/',
    auth,
    authorize(UserRole.ADMIN,UserRole.AGENT),
    WarehouseController.getAllWareHouses,
)

/**
 * @swagger
 * /warehouses/{Warehouse._id}/assign:
 *   put:
 *     tags:
 *       - Warehouses
 *     summary: Assign shipment to warehouse
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
 *         description: Shipment assigned successfully
 */

router.put(
    '/:id/assign',
    auth,
    authorize(UserRole.ADMIN),
    WarehouseController.assignShipment,
)

export default router;