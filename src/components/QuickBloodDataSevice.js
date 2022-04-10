import axios from "axios"

class QuickBloodDataService{
    fetchDataFromQuery(query){
        return axios.get(`localhost:9091/donar`)
    }
    postData(donar){
        return axios.post(`http://localhost:9091/donar`,donar)
    }
}
export default new QuickBloodDataService()