import axios from "axios"
import { GETORDERS } from "./types"
import { toast } from "react-toastify"

const getOrders=function(param){
    return{type:GETORDERS,payload:param}
}
export const fetchOrder=function(){
    return async(dispatch)=>{
    try {
        const res=await axios.get('http://localhost:3000/orders')
        dispatch(getOrders(res.data))
    } catch (error) {
        toast.error('somthing went wrong')
    }

    }
}