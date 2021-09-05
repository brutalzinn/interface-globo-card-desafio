import axios from 'axios'
require('dotenv').config()
const urlApi = process.env.REACT_APP_API

const http = axios.create({
    baseURL: urlApi
})

http.defaults.headers['Content-Type'] = 'application/json'

export default http