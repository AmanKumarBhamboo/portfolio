import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import { getPool } from "../config/db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS watch_suggestions (
        id SERIAL PRIMARY KEY,
        watch VARCHAR(200) NOT NULL,
        link VARCHAR(500),
        name VARCHAR(100),
        note TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

const initDB = async () => {
    try {
        console.log("🔌 Connecting to database...");
        await getPool().query(createTableQuery);
        console.log("✅ 'contacts' and 'watch_suggestions' tables created or already exist.");
        
        // Optional: Verify by selecting
        const res = await getPool().query("SELECT NOW()");
        console.log("🕒 Database time:", res.rows[0].now);
        
        process.exit(0);
    } catch (error) {
        console.error("❌ Failed to initialize database:", error);
        process.exit(1);
    }
};

initDB();
