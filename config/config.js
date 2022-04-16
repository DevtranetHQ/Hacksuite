import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://api.thedynamics.tech";
const config = {
    API_URL: API_URL,
    axios: axios.create({ baseURL: API_URL })
};

module.exports = config;
