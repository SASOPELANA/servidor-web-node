import express from "express";
import controller from "../controllers/location.controller.js";

const router = express.Router();

// esta ruta va primero
router.get("/create", controller.create);
router.post("/", controller.locationPost);

router.get("/", controller.location);
router.get("/:id", controller.locationById);

export default router;
