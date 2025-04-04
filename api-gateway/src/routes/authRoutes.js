const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { SERVICES } = require("../config");

const router = express.Router();

// Debug incoming requests
router.use((req, res, next) => {
    console.log(`Incoming request to API Gateway: ${req.method} ${req.url}`);
    next();
});

router.use(
    "/",
    createProxyMiddleware({
        target: SERVICES.AUTH_SERVICE,
        changeOrigin: true,
        onProxyReq: (proxyReq, req, res) => {
            console.log(`Proxying request to: ${SERVICES.AUTH_SERVICE}${req.url}`);
        },
        onError: (err, req, res) => {
            console.error("Proxy error:", err);
            res.status(500).json({ message: "Auth Service Unavailable" });
        },
    })
);

module.exports = router;
