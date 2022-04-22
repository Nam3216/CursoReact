import React from "react"
import {useContext, useEffect} from "react"
import CartContext from "../../Context/CartContext"
import ItemCount from "../ejercicios/ItemCount/ItemCount"
import "./estiloCartPage.css"
import {Navigate} from "react-router-dom"
import{useNavigate}from "react-router-dom"

export const CartPage=()=>{

const {cartList,addProduct,deleteProduct,RemoveAll,TotalPrice,price,checkForTotalPrice,finalPrice, SumPrice,modifyQuantity}=useContext(CartContext)
const navigate=useNavigate()


//para que se actualice precio final cuando se carga el componente y cuando se hace alguna modificacion
useEffect(()=>{
    SumPrice()
},[])

useEffect(()=>{
    SumPrice()
},[modifyQuantity])

//si cartList tiene elementos, los muestra, sino no
return(
    <div className="container-cart">
        {cartList.length>0 ? (
            

            <div className="container-cart">
        
           
            <table className="table-cart">
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
                            <td>{checkForTotalPrice ?(
                                product.quantity*product.price
                            ):(
                                price
                            ) } </td>
                            <td>  <button id="button-delete"onClick={()=>deleteProduct(product)}>Eliminar producto </button></td>
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
            <button onClick={()=>RemoveAll()} id="button-empty-cart">Vaciar Carrito</button>
            <button  id="boton-terminar-compra" onClick={()=>navigate("/comprar")}>Realizar compra</button>
            </div>
           
        ): (<div>
                <p>El carrito esta vacio. Llenalo con algo para comprar!</p>
                <button onClick={()=>navigate("/productos") }id="boton-carrito-vacio">Ir a Productos</button>
            </div>)}

    </div>
)


}

