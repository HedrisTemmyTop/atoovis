import React, { useState, useEffect } from "react";
import { buttons } from "./Data";
import "../../styles/VendorDash/Order.css";
import { getPokemon, filterPokemon } from "./Services";
import { useDispatch, useSelector } from "react-redux"
import { getAllOrders } from "../../slices/admin/orders"
import moment from "moment";

const Order = () => {
    const dispatch = useDispatch()
    const { data, isError, isLoading } = useSelector((state) => state.getAllOrders)
    // const [ordersList, setOrdersList] = useState([])
    
    useEffect(() => {
        dispatch(getAllOrders())
    }, [])

    console.log("data", data?.orders)

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
        <div className="ind" style={{ width: "100vw" }}>
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
                      <th scope="col" className="px-2 py-1">
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
                  {data?.orders &&
                    data?.orders.map((type,indx) => (
                      <tbody className="divide-y divide-gray-200" key={type._id}>
                        <tr>
                          <td className="px-2 py-2 text-sm ">
                            <input type="checkbox" />
                          </td>
                          
                          
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{type.orderId}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>Lagos</p>
                          </td>

                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p> {moment(type.createdAt).format("MMMM Do YYYY")}</p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <p>{type.totalTransportCost}</p>
                          </td>

                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800">
                            <p
                              className={
                                type.status === "new"
                                  ? "failed"
                                  : type.status === "pending"
                                  ? "pending"
                                  : "success"
                              }
                            >
                              {type.status}
                            </p>
                          </td>
                          <td className="px-6 py-2 text-sm font-medium text-center text-gray-800 whitespace-nowrap">
                            <select name="" id="" className="sel">
                              <option value="">...</option>
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
  );
};

export default Order;
