import express from "express";
import controller from "../controllers/contact.controller.js";

const router = express.Router();

router.get("/", controller.contact);
router.post("/", controller.submit);

export default router;
