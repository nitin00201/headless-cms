require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const schemaRoutes = require("./routes/schemaRoutes");
const contentRoutes = require("./routes/contentRoutes");

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/schema", schemaRoutes);
app.use("/api/content", contentRoutes);

app.get("/", (req, res) => res.send("Content Service Running"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Content Service running on port ${PORT}`));
