import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../redux/order/orderActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Order() {
  const order = useSelector((state) => state.orderState);
  const dispatch=useDispatch()
  const navigate=useNavigate(

  )
  function handleSubmitOrder(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/orders", {
      user: { name: e.target.userName.value, email: e.target.userEmail.value },
      order: order,
      status:"pending"
    })
    .then((res)=>{
        dispatch(deleteCart())
        toast.success('your order is onroad ')
        navigate('/')
    })
 
  }
  return (
    <form onSubmit={handleSubmitOrder}>
      <h1>user informations</h1>
      <input type="text" name="userName" />
      <input type="email" name="userEmail" />
      <input type="submit" />
    </form>
  );
}

export default Order;
