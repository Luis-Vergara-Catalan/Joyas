import pkg from 'pg';  // Importa el módulo completo

// Conexión a la base de datos
const pool = new pkg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    allowExitOnIdle: true,
});

export {pool};