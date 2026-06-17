import express from "express";
import { getPool } from "../config/db.js";

const router = express.Router();

/* =========================
   DB CONNECTION TEST ROUTE
   ========================= */
router.get("/db-test", async (req, res) => {
    try {
        const result = await getPool().query("SELECT NOW()");
        res.json({
            success: true,
            time: result.rows[0],
        });
    } catch (error) {
        console.error("DB TEST ERROR:", error);
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

/* =========================
   CONTACT FORM ROUTE
   ========================= */
router.post("/", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        await getPool().query(
            "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *",
            [name, email, message]
        );

        res.json({ success: true });
    } catch (error) {
        console.error("DB INSERT ERROR:", error);
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

export default router;
