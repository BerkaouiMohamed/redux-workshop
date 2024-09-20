import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../redux/admin/adminActions";
import AdminBox from "../components/AdminBox";

function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrder());
  }, []);
  const orders=useSelector(state=>state.adminState)
  if(!orders.length) return <h1>no orders</h1>
  return <div>

    {orders.map(order=><AdminBox order={order}/>)}
  </div>;
}

export default Admin;
