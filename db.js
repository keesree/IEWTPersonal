import pg from 'pg';
import dotenv from 'dotenv';
import fs from 'fs';  // to read the certificate file

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    host: process.env.DB_HOST,    // Your RDS endpoint
    port: process.env.DB_PORT,    // 5432 (default PostgreSQL port)
    user: process.env.DB_USER,    // e.g., 'postgres'
    password: process.env.DB_PASSWORD,  // your password
    database: process.env.DB_NAME,  // your database name
    ssl: {
        rejectUnauthorized: true,  // Ensure the server certificate is validated
        ca: fs.readFileSync('us-east-1-bundle.pem').toString()  // Path to your downloaded cert
    }
});

console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);


export default pool;
