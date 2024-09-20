import { ADDTOCART, DECQUANTITY, DELETECART, INCQUANTITY } from "./types";

function orderReducer(state = [], action) {
  switch (action.type) {
    case ADDTOCART: {
      const existProduct = state.find(
        (prod) => prod.product.id === action.payload.id
      );
      if (existProduct) return state;
      return [...state, { product: action.payload, quantity: 1 }];
    }
    case INCQUANTITY:
      return state.map((prod) =>
        prod.product.id === action.payload.product.id
          ? { product: prod.product, quantity: prod.quantity + 1 }
          : prod
      );
      case DECQUANTITY:{
        if(action.payload.quantity>1){
            return state.map((prod) =>
                prod.product.id === action.payload.product.id
                  ? { product: prod.product, quantity: prod.quantity - 1 }
                  : prod
              );
        }
        else{
           return state.filter(prod=>prod.product.id!==action.payload.product.id)
        }
      }
      case DELETECART:return []
   
    default:
      return state;
  }
}

export default orderReducer;
