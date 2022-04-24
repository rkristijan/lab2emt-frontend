import axios from "axios";

const instance = axios.create({
    baseURL: 'https://library-lab2emt-backend.herokuapp.com',
    headers: {
        'Access-Control-Allow-Origin' : 'https://library-lab2emt-frontend.herokuapp.com'
    }
})

export default instance;