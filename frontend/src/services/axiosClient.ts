import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.VITE_BASE_URL || 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default axiosClient