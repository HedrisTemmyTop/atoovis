import React, { useState, useEffect } from "react";
import { getPokemon, filterPokemon } from "./TableControl";

const Table = ({InputData}) => {
  const [filtredPokemon, setFiltredPokemon] = useState(null);
  useEffect(() => {
    setFiltredPokemon(getPokemon());
  }, []);
  const {
    product_size_price,
    product_seller_sku,
    product_ean_upc_isbn,
    product_quantity,
    product_price,
    product_sale_price,
    startdate,
    end_date
  } = InputData;


  return (
    <div className="overflow-x-auto">
      <div className="p-1.5 w-full inline-block align-middle">
        <div className="overflow-scroll border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-2 py-1   ">
                  Size
                </th>
                <th
                  scope="col"
                  className="px-2 py-1 text-xs font-bold text-center text-gray-500  "
                >
                  Seller SKU
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-center text-gray-500  "
                >
                  EAN/UPC/ISBN
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-center text-gray-500"
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
                  Start Date
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-bold text-center text-gray-500 "
                >
                  End Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-2 py-2 text-sm ">
                      <select
                        name=""
                        id=""
                        style={{ width: "auto", height: 20, borderRadius: 0 }}
                      >
                        <option value="">EU 1</option>
                      </select>
                    </td>
                    <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap flex-wrap">
                      <p className="new">{product_seller_sku}</p>
                    </td>

                    <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                      <p>{product_ean_upc_isbn}</p>
                    </td>
                    <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                      <p>{product_quantity}</p>
                    </td>
                    <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                      <p>{product_price}</p>
                    </td>
                    <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                      <p>{product_sale_price}</p>
                    </td>
                    <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                      <p>{startdate}</p>
                    </td>
                    <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                      <p>{end_date}</p>
                    </td>
                  </tr>
                </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
