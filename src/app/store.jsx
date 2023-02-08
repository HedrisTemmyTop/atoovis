import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import vendorReducer from "../slices/vendorSlice";
import getAllProduct from "../slices/productSlice";
import buyerReducer from "../slices/buyerSlice";

import createProductReducer from "../slices/createProductSlice";
import getAllReviewReducer from "../slices/admin/customerReview";
import getAllOrderReducer from "../slices/admin/orders";
import getUser from "../slices/getUser";
import getCart from "../slices/cartSlice";
export const store = configureStore({
  reducer: {
    cart: getCart,
    auth: userReducer,
    vendor: vendorReducer,
    products: getAllProduct,
    productCreate: createProductReducer,
    getReviews: getAllReviewReducer,
    buyers: buyerReducer,
    getAllOrders: getAllOrderReducer,
  },
});
