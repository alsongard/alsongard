import {Pool} from 'pg';

const globalForDb = globalThis as unknown as { // we use globalThis to prevent creating many pools. 
    pgPool? : Pool;
}

// const pool = globalForDb.pgPool ?? new Pool({
//     user: process.env.DB_USER,
//     password: process.env.PGPASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     port: parseInt(process.env.PGPORT || '5432')
// })

// const pool = globalForDb.pgPool ?? new Pool({
//     user: process.env.PGUSER,
//     password: process.env.PGNEONPASSWORD,
//     database: process.env.PGDATABASE,
//     host: process.env.PGHOST,
//     port: parseInt(process.env.PGPORT || '5432') ,
//     ssl: process.env.NODE_ENV == "production" ? {rejectUnauthorized: true} : false,
// })

const pool = globalForDb.pgPool ??  new Pool({
    connectionString: process.env.DATABASE_URL_UNPOOLED,
    ssl: process.env.NODE_ENV === "production" ? {rejectUnauthorized: true}: false,
    max: 10,
    idleTimeoutMillis: 60000,
})

if (process.env.NODE_ENV !== "production")
{
    globalForDb.pgPool = pool;
}
console.log('this is pool');
console.log(pool);


// console.log({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
// });
export {pool};
