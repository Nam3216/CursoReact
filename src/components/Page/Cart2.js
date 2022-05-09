import React, { useState } from "react"
import {useContext, useEffect} from "react"
import CartContext from "../../Context/CartContext"
import ItemCount from "../ejercicios/ItemCount/ItemCount"
import "./estiloCart2.css"
//import {Navigate} from "react-router-dom"
import{useNavigate}from "react-router-dom"
import SectionTitle from "../SectionTitle/SectionTitle"
import Button from 'react-bootstrap/Button';


export const Cart2=()=>{

const {cartList,addProduct,deleteProduct,RemoveAll,TotalPrice,price,checkForTotalPrice,finalPrice, SumPrice,modifyQuantity}=useContext(CartContext)
const navigate=useNavigate()
const[sizeScreen,setSizeScreen]=useState(true)


//para que se actualice precio final cuando se carga el componente y cuando se hace alguna modificacion
useEffect(()=>{
    SumPrice()
},[])

useEffect(()=>{
    SumPrice()
},[modifyQuantity])

//para saber tamaño de pantalla y mostrar el jsx correcto, funciona, pero si esta ya en celular no capta q es menos de 1000, solo cdo cambio desde navegador

/*useEffect(()=>{
    window.addEventListener("resize",handleReSize)
    return()=>{
        window.removeEventListener("resize",handleReSize)
    }
},[])

const handleReSize=()=>{
    if (window.onresize<1000){
        setSizeScreen(false)
        
    }
  
}*/

//si cartList tiene elementos, los muestra, sino no
// {cartList.length>0 && sizeScreen ? (
return(
   
    <div className="container-section">
         
        <SectionTitle title="Carrito de Compras"/>
        
        <div className="container-cart">
            
            {cartList.length>0  ? (
               

                <div className="container-cart-container">
            
            
                <div className="table-cart" id="id-table">
                    <div className="div-head" >
                        <div><p>Producto</p></div>
                        <div><p>Descripcion</p></div>
                        <div><p>Precio</p></div>
                        <div><p>Cantidad</p></div>
                        <div><p>Precio Total</p></div>
                        <div><p>Eliminar</p></div>
                        
                    </div>
            
                
                {cartList.map((product)=>{
                    return(
                    
                        
                            <div className="div-cart">
                                <div><img src={product.img} alt="cargando"/></div>
                                <div>{product.product} {product.brand} </div>
                                <div> {product.price}</div>
                            
                                <div >  <ItemCount stock={10} initial={product.quantity} onAdd={modifyQuantity} product={product} msg={"Modifica"}/></div>
                                {/*si State checkForTotalPrice es true, muestra el precio por cantidad del producto como lo cargo de la lista carrito*. Si es false lo muestra con price, que es el state que guarda el nuevo precio luego que se haga un cambio de cantidad*/}
                                <div>{checkForTotalPrice ?(
                                    product.quantity*product.price
                                ):(  
                                    price
                                ) } </div>
                                <div>  <Button id="button-delete"onClick={()=>deleteProduct(product)}>Eliminar producto </Button></div>
                            </div>
                                        


                    )
                })}
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div>Precio final: ${finalPrice} </div>
                        <div></div>
                    </div>
                </div>
                <Button onClick={()=>RemoveAll()} id="button-empty-cart" className="button-cart">Vaciar Carrito</Button>
                <Button  id="boton-terminar-compra" onClick={()=>navigate("/comprar")}className="button-cart">Realizar compra</Button>
                </div>
            
            ): (<div className="loader">
                    <h4>El carrito esta vacio. ¡Llenalo con algo para comprar!</h4>
                    <Button onClick={()=>navigate("/productos") }id="boton-carrito-vacio">Ir a Productos</Button>
                </div>)} 

        </div> 
    </div>
)


}
