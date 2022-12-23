import React, {useState, useEffect} from "react";
import {buttons} from './Data';
import '../../styles/VendorDash/Order.css'
import { getPokemon, filterPokemon } from "./Services";

const Order = () =>{

    const [filtredPokemon, setFiltredPokemon] = useState(null);
  useEffect(() => {
    setFiltredPokemon(getPokemon());
  }, []);

  function handlePokemon(e) {
    let typePokemon = e.target.value;
    typePokemon !== "all"
      ? setFiltredPokemon(filterPokemon(typePokemon))
      : setFiltredPokemon(getPokemon());
  }

    return(
     
                    <div className="contain">

        <div className="filter">
        <div className="ind" style={{width: '100vw'}}>
         {buttons &&
            buttons.map((type, index) => (
              <>
                <button
                  key={index}
                  value={type.value}
                  onClick={handlePokemon}
                  className="name"
                >
                  {type.name}
                </button>
              </>
            ))}
         </div>
            <div className="filt">
            <div className="overflow-x-auto">
                <h1>Orders</h1>
                <div className="p-1.5  inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className=" divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-2 py-1"
                                    >
                                        <p>S/N</p>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-1 text-xs font-bold text-center text-gray-500  "
                                    >
                                        Order ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500  "
                                    >
                                       Desination
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500"
                                    >
                                        Date
                                    </th>
                                   
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500 "
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500  "
                                    >
                                        Payment Type
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500 "
                                    >
                                        Delivery Status
                                    </th>
                                
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500  "
                                    >
                                        Action
                                    </th>
                                  
                                </tr>
                            </thead>
                            {filtredPokemon &&
        filtredPokemon.map(type => (
      
        <tbody className="divide-y divide-gray-200" key={type.id}>
          <tr >
            <td className="px-2 py-2 text-sm ">
         
                <input type="checkbox" />
                
   
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap flex-wrap">
         
             
           <p className="new">{type.order}</p>
            
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
           <p>{type.destination}</p>
            
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
           <p>{type.date}</p>
            
            </td>
            
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
           <p>{type.price}</p>
           
            
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
         <p>{type.payment}</p>
         
          
          </td>
       
        
          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800">
         
             
         <p className={
            type.status === 'New' ? 'failed' : type.status === 'Pending' ? 'pending' : 'success'
         }>{type.status}</p>
         
          
          </td>
          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
        <select name="" id="" className="sel" >
            <option value="" >...</option>
            <option value="">Ship Order</option>
            <option value="">Cancel Order</option>
            <option value="">Track Order</option>
        </select>
         
          
          </td>
          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
       +
         
          
          </td>
        
          </tr>
          </tbody>
        ))} 
                                    
                        </table>
                    </div>
                </div>
            </div>
        </div>
   
        </div>
                    </div>
    
    )
}

export default Order