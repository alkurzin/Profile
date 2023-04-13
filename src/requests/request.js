import axios from "axios";

const request = axios.create({
    baseURL: 'https://localhost:44379/api/',
});

export default request;