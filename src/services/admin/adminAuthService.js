import axios from "axios"
import {apiEndpointURL} from "../config"

const fetchAllProducts = async () => {
        const response = await axios.get(`${apiEndpointURL}/product`)
        if (response.data) {
            return response.data
        }
 
}
const adminAuthService = {
    fetchAllProducts
}
export default adminAuthService
