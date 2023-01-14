import React, { useState, useEffect } from "react";
import "../../styles/VendorDash/Transaction.css";
import { buttons } from "./Data";
import { getPokemon, filterPokemon } from "./Services";
import Toggle from "./Toggle";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import moment from "moment";


const Product = ({ products }) => {
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

  return (
    <div className="contain1">
      <div className="filter">
        <div className="indi">
         <div className="ind">
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
          {/* <div className="ex">
            <BiPlus style={{color: '#4CC5D2'}}/>
            <p style={{color: '#4CC5D2'}}>Export</p>
          </div> */}
        </div>
        <div className="filt">
          <div className="overflow-x-auto">
            <div className="vent">
              <h1>Product Inventory</h1>
              <div className="inet">
                <button className="prom">Promote Products</button>
                
                  <Link to="/sidebar/add-product">
                  <button className="prod">
                  {" "}
                  <BiPlus /> <p style={{color:'#fff'}}>Add Product</p>
                  </button>
                  </Link>
                
              </div>
            </div>
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-scroll border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-2 py-1   ">
                        S/N
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-1 text-xs font-bold text-center text-gray-500 w-5"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-bold text-center text-gray-500 w-5 "
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
                        Actual Price
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
                        Subsidize Price
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-bold text-center text-gray-500 "
                      >
                        Available
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-bold text-center text-gray-500  "
                      >
                        status
                      </th>
                    </tr>
                  </thead>
                  {products &&
                    products.map((type, index) => (
                      <tbody className="divide-y divide-gray-200" key={index}>
                        <tr>
                          <td className="px-2 py-2 text-sm ">
                            <input type="checkbox" />
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap flex-wrap">
                            <p className="new">{type.nameOfProduct}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{type?.sku}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                          <p> {moment(type.createdAt).format("MMMM Do YYYY")}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{type?.quantity || 6}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{type.price}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{type?.sale}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{type?.delivered}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{type?.payout}</p>
                          </td>

                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            {/* <p>{type.payout}</p> */}
                            <Toggle />
                          </td>
                          <td
                            scope="col"
                            className="px-2 py-3 text-xs font-bold text-center text-gray-500  "
                          >
                            <select name="" id="" className="sel">
                              <option value="">...</option>
                              <option value="">View Details</option>
                              <option value="">Edit Details</option>
                              <option value="">Delete Product </option>
                              <option value="">Restore Shop Version</option>
                              <option value="">Copy Product</option>
                            </select>
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
  );
};

export default Product;
