import { Router } from "express";
import { ReportController } from "./report.controller";
import auth from "../../middleware/auth.middleware";
import authorize from "../../middleware/role.middleware";
import { UserRole } from "../user/user.interface";

const router = Router();

/**
 * @swagger
 * /reports/daily-shipments:
 *   get:
 *     tags:
 *       - Reports
 *     summary: Get daily shipment report
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daily report generated
 */

router.get(
    "/daily-shipments",
    auth,
    authorize(UserRole.ADMIN),
    ReportController.getDailyShipments
);

/**
 * @swagger
 * /reports/delivered-orders:
 *   get:
 *     tags:
 *       - Reports
 *     summary: Get all delivered shipments
 *     description: Admin can view delivered orders report
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Delivered orders fetched successfully
 *       401:
 *         description: Unauthorized
 */

router.get(
    "/delivered-orders",
    auth,
    authorize(UserRole.ADMIN),
    ReportController.getDeliveredOrders
);

/**
 * @swagger
 * /reports/pending-orders:
 *   get:
 *     tags:
 *       - Reports
 *     summary: Get all pending shipments
 *     description: Admin can view pending shipment reports
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Pending orders fetched successfully
 */

router.get(
    "/pending-orders",
    auth,
    authorize(UserRole.ADMIN),
    ReportController.getPendingOrders
);

/**
 * @swagger
 * /reports/warehouse-utilization:
 *   get:
 *     tags:
 *       - Reports
 *     summary: Get warehouse utilization report
 *     description: Shows warehouse capacity and current load
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Warehouse utilization report generated
 */

router.get(
    "/warehouse-utilization",
    auth,
    authorize(UserRole.ADMIN),
    ReportController.getWarehouseUtilization
);


export default router;