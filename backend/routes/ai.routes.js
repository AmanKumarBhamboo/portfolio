import express from "express";

import { askAI } from "../controllers/ai.controller.js";

const router = express.Router();

/* 🔹 AI TEST */
router.get("/test", (req, res) => {
    res.json({
        ai: "working",
        status: "ok",
    });
});

/* 🔹 ASK AI */
router.post("/ask", askAI);

export default router;
