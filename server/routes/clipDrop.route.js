import express from "express";
import { clipDrop } from "../controllers/clipDrop.controller.js";

const router = express.Router();
router.post("/clipdrop", clipDrop);

export default router;
