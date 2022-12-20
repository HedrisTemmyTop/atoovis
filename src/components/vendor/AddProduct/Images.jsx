import React from "react";
import upload from '../../../../src/assets/images/Header/cil_cloud-upload.png'

const Images =({props})=> {
    const handleClick = event => {
        hiddenFileInput.current.click();
      };
      
      const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
      };

    return(

        <div>
                                        <div className="upl" onClick={handleClick}>
                                        <input
                                            type="file"
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                            style={{display: 'none'}}
                                        />
                                        
                                            <select name="" id="" >
                                                <option value=""></option>
                                                <option value="">Edit Image</option>
                                                <option value="">Add Image</option>
                                            </select>
                                            <img src={upload} alt="" />
                                            <p>Product Main Image<span>*</span></p>
                                        </div>
                                        
                                    </div>
    )
}

export default Images