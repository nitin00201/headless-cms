const axios = require("axios");
const { SERVICES } = require("../config");

const contentService = axios.create({
    baseURL: "http://localhost:5001",
    timeout: 5000,
});

module.exports = contentService;
