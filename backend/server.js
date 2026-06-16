import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes.js";

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
app.use("/api/contact", contactRoutes);

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Backend running at http://localhost:${PORT}`);
    });
}

export default app;
