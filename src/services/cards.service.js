import http from '../config/http'
const baseUrl = '/v1'


export const getAllCards = (page = 1) => http.get(`${baseUrl}/cards/list/${page}/3`)
export const getOneCard = (id) => http.get(`${baseUrl}/cards/${id}`)

export const insertCard = (data) => http.post(`${baseUrl}/cards`,data)
export const searchCard = (data, page = 1) => http.post(`${baseUrl}/search/${page}/3`, data)
export const deleteCard = () => http.delete(`${baseUrl}/cards`)
export const updateCard = (data,id) => http.put(`${baseUrl}/cards/${id}`,data)