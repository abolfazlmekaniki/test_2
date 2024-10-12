import axios from 'axios'

export const Axios = axios.create({
    // http://127.0.0.1:5001
    baseURL:'',
    withCredentials: true,
    timeout:20000
})