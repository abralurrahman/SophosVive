const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/db");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the SophosVive Backend!");
});

// Example route to fetch data from PostgreSQL
app.get("/api/data", async (req, res) => {
    try {
        const result = await db.query("SELECT NOW() AS current_time");
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
