import Axios from "axios";

export const API_URL = `/api`;
export const axios = Axios.create({ baseURL: API_URL });
