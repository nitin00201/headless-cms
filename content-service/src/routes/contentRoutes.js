const express = require("express");
const { createContent, deleteContent,updateContent } = require("../controllers/contentController");
const { authenticateUser, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authenticateUser, authorizeRoles("admin"), createContent); // 🔥 Users can create content
router.delete(":id/delete",authenticateUser, authorizeRoles("admin"),deleteContent)
router.put("/:id", authenticateUser,authorizeRoles("admin"), updateContent);  // 🔥 Add update content route

module.exports = router;
