import axios from "axios";

const API = axios.create({
    baseURL:"https://jwt-backend-llcy.onrender.com",
});

export default API;