import pkg from "pg";
const { Pool } = pkg;

let _pool;

export const getPool = () => {
  if (!_pool) {
    _pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }
  return _pool;
};
