import React, {useState} from 'react'
import ProductLayout from '../../GettingStarted/Layout/ProductLayout'
import Create from './Create'
import NewProduct from './NewProduct'
import ProductRequirement from './ProductRequirement'
import ProductPricing from './ProductPricing'
import AddImages from './AddImages'
import useForm from "../../../hooks/useForm";


const AddProduct =()=>{
   const [value, setValue] = useState(1)
   const { formData, handleInputChange } = useForm({
    // <create/>
    category: "",
    product_name:"",
    product_brand:"",
    product_model:"",
    product_color:"",

})
    return(
        <ProductLayout valued={value}>
            {value === 1 && <Create InputData={formData} onchange={handleInputChange} setValue={setValue}/>}
            {value === 2 && <NewProduct setValue={setValue}/>}
            {value === 3 && <ProductRequirement setValue={setValue}/>}
            {value === 4 && <ProductPricing setValue={setValue}/>}
            {value === 5 && <AddImages setValue={setValue}/>}
        </ProductLayout>
    )
}

export default AddProduct