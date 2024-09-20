import { FETCHPRODUCSERROR, FETCHPRODUCSLOADING, FETCHPRODUCSSUCCESS } from "./types";

function productsReducer(
  state = { loading: false, error: null, data: [] },
  action
) {
  switch (action.type) {
    case FETCHPRODUCSLOADING: return {...state,loading:true}
    case FETCHPRODUCSERROR:return {...state ,error:action.error,loading:false}
    case FETCHPRODUCSSUCCESS:return {...state,data:action.payload,loading:false}
    default:return state;
  }
}

export default productsReducer;
