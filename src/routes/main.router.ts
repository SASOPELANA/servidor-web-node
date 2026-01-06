import express from "express";
import controller from "../controllers/main.controller";

const router = express.Router();

router.get("/", controller.index);
router.get("/private", controller.privates);

export default router;