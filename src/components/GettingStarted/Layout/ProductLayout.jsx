import React from "react";
// import Welcome from "../../vendor/Auth/Welcome";

const ProductLayout =({children, valued})=>{
    console.log(valued);
    return(
        <div>
            {children}
        </div>
    )
}

export default ProductLayout