import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderBox from "../components/OrderBox";

function Cart() {
  const order = useSelector((state) => state.orderState);
  const navigate = useNavigate();
useEffect(()=>{
    if(!order.length){
        navigate('/')
    }
})
  return (<>
    <div className="order">
      {order.map((prod) => (
        <OrderBox product={prod} />
      ))}</div>
      <button onClick={()=>navigate('/order')}>order now</button>
      </>
  );
}

export default Cart;
