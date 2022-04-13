import React,{useEffect, useState} from "react"
import "./estilocart.css"
import {useContext}from "react"
import CartContext from "../../Context/CartContext"
import {Link} from "react-router-dom"

const CartWidget=()=>{
    const{cartList,addProduct,deleteProduct,count,setCount}=useContext(CartContext)
   
    
  
    return(

        <div className="cart-widget">

           <Link to="/cart" ><img src="cart-widget"/></Link>
           
            <p>{count}</p>
            

        </div>








    )
}

export default CartWidget;