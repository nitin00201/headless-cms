const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const router = express.Router();

router.use(
    "/",
    createProxyMiddleware({
        target: "http://localhost:5001", // Content Service URL
        changeOrigin: true,
    })
);

module.exports = router;
