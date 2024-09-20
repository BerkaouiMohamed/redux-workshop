import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import productsReducer from "./products/productsReducer";
import orderReducer from "./order/orderReducer";
import { thunk } from "redux-thunk";
import adminReducer from "./admin/adminReducer";

const reducer = combineReducers({
  productsState: productsReducer,
  orderState: orderReducer,
  adminState: adminReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
