import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';

// Load env from api/db/.env first (when present), then fall back to project root .env
dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config();

// Support either a connection string (DB_URL / DATABASE_URL) or individual DB_* vars
const connectionString = process.env.DB_URL || process.env.DATABASE_URL;

const poolConfig: any = {
  max: 20,
  idleTimeoutMillis: 30000,
};

if (connectionString) {
  poolConfig.connectionString = connectionString;
  if (process.env.DB_SSL !== 'false') {
    poolConfig.ssl = { rejectUnauthorized: false };
  }
} else {
  poolConfig.user = process.env.DB_USER;
  poolConfig.host = process.env.DB_HOST;
  poolConfig.database = process.env.DB_NAME;
  poolConfig.password = process.env.DB_PASSWORD;
  poolConfig.port = parseInt(process.env.DB_PORT || '5432', 10);
}

const pool = new Pool(poolConfig);

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool;
