import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../redux/order/orderActions";
import { toast } from "react-toastify";

function ProductBox({product}) {
    const dispatch=useDispatch()
    function handleAddToCart(){
        dispatch(addToCartAction(product))
        toast.success(product.title+'added to cart')
    }
  return (
    <div className="product-box">
      <img src={product.image} alt="" />
      <h3>{product.title}</h3>
      <p>{product.price} $</p>
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  );
}

export default ProductBox;
