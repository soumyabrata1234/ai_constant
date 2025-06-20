import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: "https://ask-to-ai-5.onrender.com",
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
})


export default axiosInstance;   
