import express from "express";
import { getPool } from "../config/db.js";

const router = express.Router();

let tableReady;
const ensureTable = () => {
    tableReady ??= getPool()
        .query(
            `CREATE TABLE IF NOT EXISTS watch_suggestions (
                id SERIAL PRIMARY KEY,
                watch VARCHAR(200) NOT NULL,
                link VARCHAR(500),
                name VARCHAR(100),
                note TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`
        )
        .catch((err) => {
            tableReady = undefined;
            throw err;
        });
    return tableReady;
};

/* =========================
   WATCH SUGGESTION ROUTE
   ========================= */
router.post("/", async (req, res) => {
    const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");
    const watch = clean(req.body.watch, 200);
    const link = clean(req.body.link, 500);
    const name = clean(req.body.name, 100);
    const note = clean(req.body.note, 1000);

    if (!watch) {
        return res.status(400).json({ error: "Please tell me which watch you suggest" });
    }
    if (link && !/^https?:\/\//i.test(link)) {
        return res.status(400).json({ error: "The link must start with http:// or https://" });
    }

    try {
        await ensureTable();
        await getPool().query(
            "INSERT INTO watch_suggestions (watch, link, name, note) VALUES ($1, $2, $3, $4)",
            [watch, link || null, name || null, note || null]
        );
        res.json({ success: true });
    } catch (error) {
        console.error("WATCH INSERT ERROR:", error);
        res.status(500).json({ success: false, error: "Could not save your suggestion" });
    }
});

export default router;
