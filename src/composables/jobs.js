import { ref } from 'vue'
import api from '../services/Api'

export default function useJobs() {
    const jobs = ref([])

    const getJobs = async () => {
        const response = await api.get('/jobs')
        jobs.value = response.data.data
    }
    return { jobs, getJobs }
}
