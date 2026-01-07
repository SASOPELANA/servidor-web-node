import express from "express";
import controller from "../controllers/species.controller.js";

const router = express.Router();


router.get('/', controller.location)

export default router;