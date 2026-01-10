import { pool } from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

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
        await pool.query(createTableQuery);
        console.log("✅ 'contacts' table created or already exists.");
        
        // Optional: Verify by selecting
        const res = await pool.query("SELECT NOW()");
        console.log("🕒 Database time:", res.rows[0].now);
        
        process.exit(0);
    } catch (error) {
        console.error("❌ Failed to initialize database:", error);
        process.exit(1);
    }
};

initDB();
