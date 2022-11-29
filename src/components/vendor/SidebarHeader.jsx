import React from "react";
import logo from "../../assets/images/Header/Atoovislogo-white 2.png"
import '../../styles/vendor/SidebarHead.css'
import {TbWorld} from 'react-icons/tb'
import {AiOutlineSearch} from 'react-icons/ai'
const SidebarHeader = () =>{
    return(
        <div className="side-head">
            <div className="atoovis">
            <img src={logo} alt="" />
            </div>
            <div>
                <div  className="box">
                    <div className='linker'>
                        <TbWorld/>
                        <p>Getting Started</p>
                    </div>
                    <div>
                        <div className="see">
                            <AiOutlineSearch width={20} height={40}/>
                            <input type="text" />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarHeader