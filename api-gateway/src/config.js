require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 4000,
    SERVICES: {
        AUTH_SERVICE: process.env.AUTH_SERVICE || "http://localhost:5000",
        CONTENT_SERVICE: process.env.CONTENT_SERVICE || "http://localhost:5001",
    },
    JWT_SECRET: process.env.JWT_SECRET || "iamnitin",
};
