const axios = require("axios");
const { SERVICES } = require("../config");

const authService = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 5000,
});

module.exports = authService;
