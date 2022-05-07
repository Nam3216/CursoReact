import React, { useState } from "react"
import {useContext, useEffect} from "react"
import CartContext from "../../Context/CartContext"
import ItemCount from "../ejercicios/ItemCount/ItemCount"
import "./estiloCartPage.css"
//import {Navigate} from "react-router-dom"
import{useNavigate}from "react-router-dom"
import SectionTitle from "../SectionTitle/SectionTitle"
import Button from 'react-bootstrap/Button';


export const CartPage=()=>{

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
            
            
                <table className="table-cart" id="id-table">
                    <tr className="div-head" >
                        <td><p>Producto</p></td>
                        <td><p>Descripcion</p></td>
                        <td><p>Precio</p></td>
                        <td><p>Cantidad</p></td>
                        <td><p>Precio Total</p></td>
                        <td><p>Eliminar</p></td>
                        
                    </tr>
            
                
                {cartList.map((product)=>{
                    return(
                    
                        
                            <tr className="div-cart">
                                <td><img src={product.img} alt="cargando"/></td>
                                <td>{product.product} {product.brand} </td>
                                <td> {product.price}</td>
                            
                                <td >  <ItemCount stock={10} initial={product.quantity} onAdd={modifyQuantity} product={product} msg={"Modifica"}/></td>
                                {/*si State checkForTotalPrice es true, muestra el precio por cantidad del producto como lo cargo de la lista carrito*. Si es false lo muestra con price, que es el state que guarda el nuevo precio luego que se haga un cambio de cantidad*/}
                                <td>{checkForTotalPrice ?(
                                    product.quantity*product.price
                                ):(  
                                    price
                                ) } </td>
                                <td>  <Button id="button-delete"onClick={()=>deleteProduct(product)}>Eliminar producto </Button></td>
                            </tr>
                                        


                    )
                })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Precio final: ${finalPrice} </td>
                        <td></td>
                    </tr>
                </table>
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

