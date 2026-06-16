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
`;

const initDB = async () => {
    try {
        console.log("🔌 Connecting to database...");
        await getPool().query(createTableQuery);
        console.log("✅ 'contacts' table created or already exists.");
        
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
