import React, {useState, useEffect} from "react";
import  '../../styles/VendorDash/Transaction.css'
import {buttons} from './Data';
import { getPokemon, filterPokemon } from "./Services";
import Toggle from './Toggle'
const Transaction = () =>{

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
                <h1>All Transactions</h1>
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-scroll border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-2 py-1   "
                                    >
                                        <input type="checkbox" />
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-1 text-xs font-bold text-center text-gray-500  "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500  "
                                    >
                                        SKU
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500"
                                    >
                                        Created
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500 "
                                    >
                                        Quantity
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
                                        Sale Price
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500 "
                                    >
                                        Delivered
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500 "
                                    >
                                        Payout Amt
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500  "
                                    >
                                        Order status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500  "
                                    >
                                        Payout Status
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
         
             
           <p className="new">{type.name}</p>
            
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
           <p>{type.sku}</p>
            
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
           <p>{type.created}</p>
            
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
           <p>{type.quantity}</p>
            
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
           <p>{type.price}</p>
           
            
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
         <p>{type.sale}</p>
         
          
          </td>
          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
         <p>{type.delivered}</p>
         
          
          </td>
          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
         <p>{type.payout}</p>
         
          
          </td>
          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800">
         
             
         <p className={
            type.status === 'Failed' ? 'failed' : type.status === 'Pending' ? 'pending' : 'success'
         }>{type.status}</p>
         
          
          </td>
          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
         {/* <p>{type.payout}</p> */}
         <Toggle/>
         
          
          </td>
            
          </tr>
          </tbody>
        ))} 
                                    {/* </td>
                                   
                                </tr> */}
                              
                                
                            {/* </tbody> */}
                        </table>
                    </div>
                </div>
            </div>
        </div>
      {/* {filtredPokemon &&
        filtredPokemon.map(type => (
          <ul key={type.id}>
            <li>{type.name}</li>
          </ul>
        ))} */}
        </div>
                    </div>
    
    )
}

export default Transaction