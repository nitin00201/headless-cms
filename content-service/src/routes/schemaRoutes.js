const express = require("express");
const { createSchema, deleteSchema } = require("../controllers/schemaController");
const { authenticateUser, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authenticateUser, authorizeRoles("admin"), createSchema); // 🔥 Only Admins can create schemas
router.delete("/:id", authenticateUser, authorizeRoles("admin"), deleteSchema); // 🔥 Only Admins can delete schemas

module.exports = router;
