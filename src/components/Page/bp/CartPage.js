import React from "react"
import {useContext} from "react"
import CartContext from "../../Context/CartContext"
import ItemCount from "../ejercicios/ItemCount/ItemCount"
import "./estiloCartPage.css"

export const CartPage=()=>{

const {cartList,addProduct,deleteProduct,RemoveAll}=useContext(CartContext)

const modifyQuantity=(quantity,product)=>{
    console.log(quantity,product,"modify")
    cartList.map((item)=>{
        if(item.id==product.id){
            item.quantity=quantity
        }
    })

}
return(
    <div className="container-cart">
        <table className="table-cart">
            <tr>
                <td><strong></strong></td>
            </tr>
    
        <button onClick={()=>RemoveAll()} >Vaciar Carrito</button>
        {cartList.map((product)=>{
            return(
                <div key={product.id} className="div-cart">
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
                    </div>
                </div>
               


            )
        })}
        </table>
    </div>
)


}