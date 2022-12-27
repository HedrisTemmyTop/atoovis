import axios from "axios"
import {apiEndpointURL} from "../config"

const fetchAllProducts = async () => {
        const response = await axios.get(`${apiEndpointURL}/product`)
        if (response.data) {
            return response.data
        }
 
}

const createABusiness = async (data) => {
    const response = await axios.post(`${apiEndpointURL}/business`, data)
    console.log(response)
    if (response.data) {
        return response.data
    }

}




const adminAuthService = {
    fetchAllProducts,
    createABusiness
}
export default adminAuthService
