import React from "react";
import { useDispatch } from "react-redux";
import { decProductQuantity, incProductQuantity } from "../redux/order/orderActions";


function OrderBox({ product }) {
  const dispatch = useDispatch();
  function handleIncProd(){
    dispatch(incProductQuantity(product))
    
  }
  function handleDecProd(){
    dispatch(decProductQuantity(product))
    
  }

  return (
    <div className="product-box">
      <img src={product.product.image} alt="" />
      <h3>{product.product.title}</h3>
      <p>{product.product.price} $</p>
      <button onClick={handleIncProd}>+</button>
      <h4>{product.quantity} </h4>
      <button onClick={handleDecProd}>-</button>
    </div>
  );
}

export default OrderBox;
