import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`}
})

export default api