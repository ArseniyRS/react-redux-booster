import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
})

const apiKey = process.env.REACT_APP_API_KEY ?? ''

export function getCategoriesReq() {
  return instance.get(`categories?api_key=${apiKey}`)
}
