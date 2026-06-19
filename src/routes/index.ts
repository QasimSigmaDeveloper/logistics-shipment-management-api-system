import { Router } from "express";
import authRoutes from "../modules/auth/auth.route";
import router from "../modules/auth/auth.route";
import shipmentRoutes from "../modules/shipment/shipment.route";
import warehouseRoutes from "../modules/warehouse/warehouse.route"
import deliveryRoutes from "../modules/delivery/delivery.route"
import trackingRoutes from "../modules/tracking/tracking.route"
import notificationRoutes from "../modules/notification/notification.route"
import reportRoutes from "../modules/report/report.route"

const routes = Router();

routes.use(
    "/auth",
    authRoutes,
)
routes.use(
    "/shipments",
    shipmentRoutes,
)
routes.use(
    "/warehouse",
    warehouseRoutes
)
routes.use(
    "/deliveries",
    deliveryRoutes
)
routes.use(
    "/tracking",
    trackingRoutes,
)
routes.use(
    "/notidfications",
    notificationRoutes
)
routes.use(
    "/reports",
    reportRoutes

)
export default routes;