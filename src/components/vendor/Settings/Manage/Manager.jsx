import React, {useState, useEffect} from "react";
// import  '../../styles/VendorDash/Transaction.css'
import '../../../../styles/settings/manage.css'
import { getPokemon, filterPokemon } from "./Services";
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
     
                    <div className="">

        <div className="filter">
        
            <div className="filt">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                
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
                                       Email Address
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500"
                                    >
                                        Role
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-xs font-bold text-center text-gray-500 "
                                    >
                                       2FA Status
                                    </th>
                                   
                                   
                                    
                                    
                                </tr>
                            </thead>
                            {filtredPokemon &&
        filtredPokemon.map(type => (
      
        <tbody className="divide-y divide-gray-200" key={type.id}>
          <tr >
           
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap flex-wrap">
         
             
           <p className="new">{type.name}</p>
            
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
           <p>{type.email}</p>
            
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
           <p>{type.role}</p>
            
            </td>
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
           <p className="enable">{type.status}</p>
            
            </td>
           
            <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
         
             
         <p className="">...</p>
          
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