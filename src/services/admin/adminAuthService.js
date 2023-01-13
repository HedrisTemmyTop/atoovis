import axios from "axios"
import {apiEndpointURL} from "../config"

const fetchAllProducts = async () => {
        const response = await axios.get(`${apiEndpointURL}/products`)
        if (response.data) {
            return response.data
        }
 
}
const fetchAllReviews = async () => {
    const response = await axios.get(`${apiEndpointURL}/reviews`)
    if (response.data) {
        return response.data
    }

}

const fetchAllOrders = async () => {
    const response = await axios.get(`${apiEndpointURL}/orders`)
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

const createAProduct = async (data) => {
    const response = await axios.post(`${apiEndpointURL}/products`, data)
    console.log(response)
    if (response.data) {
        return response.data
    }

}



const adminAuthService = {
    fetchAllProducts,
    createABusiness,
    createAProduct,
    fetchAllReviews,
    fetchAllOrders
}
export default adminAuthService
