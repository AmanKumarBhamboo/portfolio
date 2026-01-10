import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import aiRoutes from "./routes/ai.routes.js";
import contactRoutes from "./routes/contact.routes.js";

dotenv.config();

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

/* 🔹 HEALTH CHECK */
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        backend: "running",
    });
});

/* 🔹 TEST ROOT */
app.get("/test", (req, res) => {
    res.json({ message: "Backend alive 🔥" });
});

/* 🔹 ROUTES */
app.use("/api/ai", aiRoutes);
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
