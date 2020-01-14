// Define all routes related to the application
const express = require("express");
const router = express.Router();
const path = require("path");

const controller = require("./controllers");
const apiService = require("./services/apiService");

// api routes
router.all("/api/*", apiService);

// For all routes render app
// authentication from RightComXP platform
router.get("*", controller.authMiddleware, (req, res, next) => {
  // render single page app
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

module.exports = router;
