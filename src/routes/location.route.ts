import express from "express";
import controller from "../controllers/location.controller.js";

const router = express.Router();


router.get('/', controller.location)

export default router;