import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

const $api = axios.create({
    baseURL: "https://job.kitactive.ru/api",
});

$api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(USER_LOCALSTORAGE_KEY)
        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default $api; 