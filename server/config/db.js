const { Pool } = require("pg");

// PostgreSQL connection configuration
const pool = new Pool({
    user: "postgres", // Replace with your PostgreSQL username
    host: "localhost",
    database: "sophosvive", // Replace with your database name
    password: "your_password", // Replace with your PostgreSQL password
    port: 5432,
});

pool.on("connect", () => {
    console.log("Connected to the PostgreSQL database!");
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
