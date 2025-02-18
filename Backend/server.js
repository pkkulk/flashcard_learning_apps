
const express = require("express");
const mongoose = require("mongoose");
const f1= require("./routes/flashcard")
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB Atlas"));

// Flashcard Schema
app.use("/api/flashcard",f1);

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
