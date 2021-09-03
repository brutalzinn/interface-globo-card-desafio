import http from '../config/http'
const baseUrl = '/v1/cards'


export const getAllCards = () => http.get(baseUrl)
export const insertCard = (data) => http.post(baseUrl,data)
export const deleteCard = () => http.delete(baseUrl)
export const updateCard = () => http.put(baseUrl)