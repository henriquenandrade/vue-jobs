import { reactive } from 'vue'
import api from '../services/Api'

export default function useJobs() {
    const state = reactive({
        jobs: [],
        isLoading: true
    })

    const getJobs = async () => {
        try{
            const response = await api.get('/jobs')
            state.jobs = response.data.data
        } catch(error) {
            console.log("Error fetching data" + error)
        } finally {
            state.isLoading = false
        }
    }
    return { state, getJobs }
}
