import React, { useState } from "react"
import {useContext, useEffect} from "react"
import CartContext from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount/ItemCount"
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


//use effect cuando carga componente verifica tamño screen. >=1000 muestra tabla. menor muestra jsx abajo de todo, sin tabla
useEffect(()=>{
  
    if(window.screen.width>=1000){
        
        setSizeScreen(true)
    }
    if(window.screen.width<1000){
       
        setSizeScreen(false)
    }
},[])

//si cartList tiene elementos, los muestra, sino no

return(
   
    <div className="container-section">
         
        <SectionTitle title="Carrito de Compras"/>
        {/*condicional, sizeScreen true, pantalla gde muestra tabla, sino muestra otro jsx*/}
        {sizeScreen ?(
        
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
      ):(
         
     <div>
         {cartList.length>0 ? (
             <div>
         {cartList.map((product)=>{
             return(
                 <div className="product-screen-small" key={product.id}>
                     <img src={product.img} alt="cargando"/>
                     <p>{product.title} </p>
                     <div> Precio Unitario ${product.price} </div>
                     <div className="small-counter">
                     <ItemCount initial={product.quantity} msg={"Modifica"} onAdd={modifyQuantity} product={product} stock={10} />
                     </div>
                     <div>{checkForTotalPrice ?(
                                    product.quantity*product.price
                                ):(  
                                    price
                                ) } </div>
                     <Button id="button-delete"onClick={()=>deleteProduct(product)}>Eliminar producto </Button>
                     </div>
             )
         })}

        </div>): (
             <div className="loader">
                <h4>El carrito esta vacio. ¡Llenalo con algo para comprar!</h4>
                <Button onClick={()=>navigate("/productos") }id="boton-carrito-vacio">Ir a Productos</Button>
            </div>
         )}
     </div>
 )}
    </div>
)


}

