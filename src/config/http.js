import axios from 'axios'

const urlApi = process.env.API_URL

const http = axios.create({
    baseURL: urlApi
})

http.defaults.headers['content-type'] = 'application/json'

export default http