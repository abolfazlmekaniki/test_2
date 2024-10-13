import axios from 'axios'

export const Axios = axios.create({
    baseURL:'https://1a31b4fd-bd78-429b-aacc-2ed63b47de15.mock.pstmn.io',
    // withCredentials: true,
    timeout:20000
})