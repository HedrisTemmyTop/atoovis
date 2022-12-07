import React from "react";
import Welcome from "../../vendor/Auth/Welcome";

const GeneralLayout =({children, values})=>{
    console.log(values);
    return(
        <div>
            {children}
        </div>
    )
}

export default GeneralLayout