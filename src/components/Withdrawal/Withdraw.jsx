import React, {useState, useEffect} from "react";
import  '../../styles/VendorDash/Transaction.css'
import { getPokemon, filterPokemon } from "./Service";
const Withdraw = () =>{

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
     
            <div className="filt">
            <div className="overflow-x-auto">
                <h1>Withdrawals</h1>
                <div className="p-1.5 w-full ">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-2 py-1"
                                    >
                                        S/N
                                    </th>
                                  
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500  "
                                    >
                                        Amount
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500  "
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500"
                                    >
                                        Status
                                    </th>
                                   
                                   
                                </tr>
                            </thead>
                            {filtredPokemon &&
        filtredPokemon.map(type => (
      
        <tbody className="divide-y divide-gray-200" key={type.id}>
          <tr >
            <td className="px-6 py-2 text-sm ">
         
                <input type="checkbox" />
                
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap flex-wrap">
         
             
           <p className="new">{type.sale}</p>
            
            </td>

            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
           <p>{type.created}</p>
            
            </td>
         
         
          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800">
         
             
         <p className={
            type.status === 'Failed' ? 'failed' : type.status === 'Pending' ? 'pending' : 'success'
         }>{type.status}</p>
         
          
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

export default Withdraw