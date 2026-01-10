import { pool } from "../config/db.js";

export const submitContact = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        await pool.query(
            "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)",
            [name, email, message]
        );

        res.status(201).json({ success: true });
    } catch (error) {
        console.error("DB insert error:", error);
        res.status(500).json({ error: "Failed to save contact" });
    }
};
