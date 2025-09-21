import express from "express";
import { getRevenue, getTopProducts, getRevenueByRegion } from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/revenue", getRevenue);
router.get("/top-products", getTopProducts);
router.get("/region-stats", getRevenueByRegion);

export default router;
