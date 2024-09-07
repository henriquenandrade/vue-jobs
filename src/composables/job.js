import { reactive } from 'vue'
import api from '../services/Api'

export default function useJob(id) {
    const state = reactive({
        job: {},
        isLoading: true
    })

    const getJob = async () => {
        try {
            const response = await api.get(`/jobs/${id}`)
            state.job = response.data.data
        } catch(error) {
            console.log("Error fetching data" + error)
        } finally {
            state.isLoading = false
        }
    }
    return { state, getJob }
}
