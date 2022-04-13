import React from "react"
import {useContext} from "react"
import CartContext from "../../Context/CartContext"
import ItemCount from "../ejercicios/ItemCount/ItemCount"
import "./estiloCartPage.css"
import {Navigate} from "react-router-dom"
import{useNavigate}from "react-router-dom"

export const CartPage=()=>{

const {cartList,addProduct,deleteProduct,RemoveAll,TotalPrice,price,checkForTotalPrice}=useContext(CartContext)
const navigate=useNavigate()
//modificarCantidad, es el onClick de ITemCount para este componente
const modifyQuantity=(quantity,product)=>{
    console.log(quantity,product,"modify")
    cartList.map((item)=>{
        if(item.id==product.id){
            item.quantity=quantity
        }
    })
    TotalPrice(product)

}

//si cartList tiene elementos, los muestra, sino no
return(
    <div className="container-cart">
        {cartList.length>0 ? (
            

            <div className="container-cart">
        
            <button onClick={()=>RemoveAll()} id="button-empty-cart">Vaciar Carrito</button>
            <button  id="boton-terminar-compra">Terminar mi compra</button>
            <table className="table-cart">
                <tr className="div-head">
                    <td><p>Producto</p></td>
                    <td><p>Descripcion</p></td>
                    <td><p>Precio Unitario</p></td>
                    <td><p>Cantidad</p></td>
                    <td><p>Modificar</p></td>
                    <td><p>Precio Total</p></td>
                    <td><p>Eliminar</p></td>
                    
                </tr>
        
            
            {cartList.map((product)=>{
                return(
                
                    
                        <tr className="div-cart">
                            <td><img src={product.img} alt="cargando"/></td>
                            <td>{product.product} {product.brand} </td>
                            <td> {product.price}</td>
                            <td> {product.quantity}</td>
                            <td >  <ItemCount stock={10} initial={product.quantity} onAdd={modifyQuantity} product={product} msg={"Modifica Cantidad Final"}/></td>
                            <td>{checkForTotalPrice ?(
                                product.quantity*product.price
                            ):(
                                price
                            ) } </td>
                            <td>  <button id="button-delete"onClick={()=>deleteProduct(product)}>Eliminar producto </button></td>
                        </tr>
                    


                
                


                )
            })}
            </table>
            </div>
           
        ): (<div>
                <p>El carrito esta vacio. Llenalo con algo para comprar!</p>
                <button onClick={()=>navigate("/productos") }id="boton-carrito-vacio">Ir a Productos</button>
            </div>)}

    </div>
)


}

/*

                    <div className="div-cart-imagen">
                        <p>Product</p>
                        
                        <img src={product.img} alt="cargando"/>
                        
                    </div>
                    <div className="div-cart-descripcion">
                        <p>Descripcion</p>
                        <p>{product.product} {product.brand} </p>
                        <p>Talle: {product.size}</p>
                    </div>
                    <div className="div-cart-precio">
                        <p>{product.price}</p>
                    </div>
                    <div className="div-cart-cantidad">
                        <p>Cantidad {product.quantity}</p>
                        <ItemCount stock={10} initial={product.quantity} onAdd={modifyQuantity} product={product} msg={"Modifica Cantidad Final"}/>
                        <p>{product.price}</p>
                    </div>
                    <div className="div-cart-eliminar">
                        <p>Eliminar</p>
                        <button onClick={()=>deleteProduct(product)}>Eliminar producto </button>
                    </div>*/