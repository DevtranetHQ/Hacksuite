import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:4000";
const config = {
    API_URL: API_URL,
    axios: axios.create({ baseURL: API_URL })
};

module.exports = config;
