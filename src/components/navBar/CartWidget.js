import React,{useEffect, useState} from "react"
import "./estilocart.css"
import {useContext}from "react"
import CartContext from "../../Context/CartContext"
import {Link} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget=()=>{
    const{cartList,addProduct,deleteProduct,count,setCount}=useContext(CartContext)
   
    //<Link to="/cart" ><img src="cart-widget"/></Link>
  
    return(

        <div className="cart-widget">

           <div className="icon">
            <Link to="/cart"> <ShoppingCartIcon sx={{color:"#FFFFFF" }} fontSize="large"/></Link>
            <Link to="/cart"><p>{count}</p></Link>
          </div>
            

        </div>








    )
}

export default CartWidget;