import axios from 'axios';

const api = axios.create({
    baseURL: "http://46.101.158.75:8091"
})

export default api;