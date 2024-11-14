const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const walletRouter = require("./Routers/Router");
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/api/v1", walletRouter);

async function main() {
  try {
    await mongoose.connect(process.env.DB_STRING);
    console.log("Connected to the database");

    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1);
  }
}

main();
