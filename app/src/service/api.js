import axios from "axios";

const api = axios.create({
    baseURL:'https://todomac.herokuapp.com/'
})


export default api;
