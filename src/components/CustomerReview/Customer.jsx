import React, { useState, useEffect } from "react";
import "../../styles/VendorDash/Transaction.css";
import { buttons } from "./Data";
import { getPokemon, filterPokemon } from "./Services";

const Customer = ({reviews}) => {
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
    <div className="contain">
      <div className="filter">
        <div className="filt">
          <h1>Customer Feedbacks</h1>
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-2 py-1   ">
                        <input type="checkbox" />
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-1 text-xs font-bold text-center text-black-800  "
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-bold text-center text-black-800   "
                      >
                        SKU
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-bold text-center text-black-800 "
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-bold text-center text-black-800  "
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-bold text-center text-black-800  "
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-bold text-center text-black-800   "
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-bold text-center text-black-800  "
                      >
                        Ratings
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-xs font-bold text-center text-black-800   "
                      >
                        Comments
                      </th>
                    </tr>
                  </thead>
                  {reviews &&
                    reviews.map((review, indx) => (
                      <tbody className="divide-y divide-gray-200" key={review._id}>
                        <tr>
                          <td className="px-2 py-2 text-sm ">
                            <input type="checkbox" />
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap flex-wrap">
                            <p className="new">{review.title}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{review.product.type}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{review.product.productDescription}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{review.product.type}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{review.rating}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{review.product.price}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{review.rating}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{review.comment}</p>
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
  );
};

export default Customer;
