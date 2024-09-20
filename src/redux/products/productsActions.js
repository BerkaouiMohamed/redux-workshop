import axios from "axios";
import { FETCHPRODUCSERROR, FETCHPRODUCSLOADING, FETCHPRODUCSSUCCESS } from "./types";

function fetchProductsSuccess(param) {
  return { type: FETCHPRODUCSSUCCESS, payload: param };
}
function fetchProductsLoading() {
  return { type: FETCHPRODUCSLOADING };
}

function fetchProductsError(param) {
  return { type: FETCHPRODUCSERROR, error: param };
}
export function fetchProducts() {
  return async (dispatch) => {
    dispatch(fetchProductsLoading());
    try {
      const response = await axios.get("http://localhost:3000/products");
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsError(error.message));
    }
  };
}
