import React,{useState} from "react"
import db from "../../firebase"
import { collection,addDocs, addDoc } from "firebase/firestore"
import CartContext from "../../Context/CartContext"
import { useContext } from "react"
import "./estiloTransactionPage.css"
import Button from 'react-bootstrap/Button';
import SectionTitle from "../SectionTitle/SectionTitle"

const TransactionPage=()=>{
    const{cartList,finalPrice}=useContext(CartContext)

    const[buyerInfo,setBuyerInfo]=useState({name:"",phone:"",email:""})
    const[order,setOrder]=useState({
        buyer:buyerInfo,
        items:cartList.map((product)=>{
            return{id:product.id,product:product.product,price:product.price, quantity:product.quantity}//devuelve en nueva lista, estos valores de cada item de la lista
        }),
        date:Date(),
        price:finalPrice,
        
        })
    console.log("order",order)

    //funcion que obtiene los datos del input y los guarda en state buyerInfo
    const handleInput=(e)=>{
        e.preventDefault()
        setBuyerInfo({...buyerInfo,[e.target.name]:e.target.value})
    }
    console.log("input",buyerInfo)
//funcion submit, guarda en state la info de buyer, y tb en un objeto que le pasa a funcion pushorder
    const SendData=(e)=>{
        e.preventDefault()
        let orderOk={...order,buyer:buyerInfo}
        setOrder({...order,buyer:buyerInfo})
        PushOrder(orderOk)
    }
//funcion para actualizar collection en firebase
    const PushOrder=async (orderOk)=>{
        const collectionOrder=collection(db,"transactionOrder")
        const addInfo=await addDoc(collectionOrder,orderOk)
        console.log("orden generada",addInfo)
    }
    
    return (
        <div className="compra">
            <SectionTitle title={"Formulario de Compra"}/>
            
            <form className="form-compra" onSubmit={SendData}>
                <label for="name"><h4>Escriba su nombre</h4></label>
                <input type="text" placeholder="Escriba su nombre" name="name" onChange={handleInput} className="form-compra-input" />
                <label for="phone"><h4>Escriba su telefono</h4></label>
                <input type="text" placeholder="Escriba su telefono" name="phone" onChange={handleInput}className="form-compra-input" />
                <label for="email"><h4>Escriba su email</h4></label>
                <input type="text" placeholder="Escriba su email" name="email" onChange={handleInput}className="form-compra-input" />
                <Button type="submit">Enviar datos</Button>

            </form>
        </div>
        
    
        )
}

export default TransactionPage;