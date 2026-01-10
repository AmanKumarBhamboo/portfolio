import express from "express";
import { pool } from "../config/db.js";

const router = express.Router();

/* =========================
   DB CONNECTION TEST ROUTE
   ========================= */
router.get("/db-test", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
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

    try {
        const result = await pool.query(
            "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *",
            [name, email, message]
        );

        res.json({
            success: true,
            saved: result.rows[0],
        });
    } catch (error) {
        console.error("DB INSERT ERROR FULL:", error); // 👈 FULL ERROR

        res.status(500).json({
            success: false,
            error: error.message, // 👈 REAL ERROR MESSAGE
        });
    }
});

export default router;
