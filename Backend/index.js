const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const { walletRouter } = require("./Routers/Router");

// Middleware to parse JSON
app.use(express.json());

// Use the router
app.use("/api/v1", walletRouter);

async function main() {
    try {
        // Connect to the database
        await mongoose.connect(process.env.DB_STRING);
        console.log("Connected to the database");

        // Start the server
        app.listen(3000, () => {
            console.log("Listening on port 3000");
        });
    } catch (error) {
        console.error("Failed to connect to the database", error);
        process.exit(1); // Exit with failure code if unable to connect
    }
}

main();
