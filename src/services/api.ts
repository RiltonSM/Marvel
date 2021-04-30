import axios from 'axios';

const api = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public/",
    params: {
        apikey: "52009fb5e24c66c9f6573f9417f4abda"
    }
});

export default api;