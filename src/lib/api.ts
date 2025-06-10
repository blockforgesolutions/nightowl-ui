import axios from "axios";
// import { handleError } from "./handle-error";

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
});

api.interceptors.request.use(
    (config) => {
        const token: string | null = localStorage.getItem('access_token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("access_token")
            window.location.href = "/auth/sign-in"
        }
        // const errorMessage = error.response?.data?.message || error.message
        // handleError(errorMessage)

        return Promise.reject(error)
    }
);

export default api