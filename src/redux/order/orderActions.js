import { ADDTOCART, DECQUANTITY, DELETECART, GETORDERS, INCQUANTITY } from "./types"

export const addToCartAction=function(param){
    return{ type:ADDTOCART,payload:param}
}
export const incProductQuantity=function(param){
    return {type:INCQUANTITY,payload:param}
}
export const decProductQuantity=function(param){
    return {type:DECQUANTITY,payload:param}
}

export const deleteCart=function(){
    return {type:DELETECART}
}

