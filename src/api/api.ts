import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const isUnauthorized = error.response?.status === 401;
        const isLoginRequest = originalRequest?.url?.includes("/login");

        if (isUnauthorized && !isLoginRequest && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                await api.post("/auth/refresh");
                return api(originalRequest);
            } catch (refreshError) {
                console.error("Refresh failed ", refreshError);
                window.location.href = "/login?expired=true";
            }
        }

        return Promise.reject(error);
    }
);
export default api;
