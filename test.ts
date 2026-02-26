/**
 * Test DB connection. Uses .env by default, or pass a connection string as first arg.
 * Run: npx tsx scripts/test-db-connection.ts
 * Or:  npx tsx scripts/test-db-connection.ts "postgresql://user:pass@host:5432/dbname"
 */
import 'dotenv/config';
import { Client } from 'pg';

function getConfig(): { connectionString?: string; ssl?: { rejectUnauthorized: boolean } } {
  const url = process.argv[2] || process.env.DB_URL || process.env.DATABASE_URL;
  if (url) {
    return {
      connectionString: url,
      ssl: process.env.DB_SSL === 'false' ? undefined : { rejectUnauthorized: false },
    };
  }
  return {
    connectionString: undefined,
    ssl: process.env.DB_SSL === 'false' ? undefined : { rejectUnauthorized: false },
  };
}

async function main() {
  const config = getConfig();

  if (config.connectionString) {
    // Mask password in log
    const masked = config.connectionString.replace(/:([^:@]+)@/, ':****@');
    console.log('Using connection string:', masked);
  } else {
    const { DB_HOST, DB_USER, DB_NAME, DB_PORT } = process.env;
    console.log('Using env vars:', { host: DB_HOST, user: DB_USER, database: DB_NAME, port: DB_PORT });
    if (!DB_HOST || !DB_USER || !DB_NAME) {
      console.error('No DB_URL/DATABASE_URL and missing DB_HOST, DB_USER, or DB_NAME in .env');
      process.exit(1);
    }
  }

  const client = new Client({
    connectionString: config.connectionString,
    ssl: config.ssl,
    ...(config.connectionString
      ? {}
      : {
          user: process.env.DB_USER,
          host: process.env.DB_HOST,
          database: process.env.DB_NAME,
          password: process.env.DB_PASSWORD,
          port: parseInt(process.env.DB_PORT || '5432', 10),
        }),
  });

  try {
    await client.connect();
    const res = await client.query('SELECT 1 as ok, current_database(), current_user');
    console.log('OK – connected:', res.rows[0]);
  } catch (err: any) {
    console.error('Connection failed:', err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();