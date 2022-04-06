import React,{useState,useEffect} from "react";
import {ProductsMock} from "../MockList/ProductsMock"
import { useParams } from "react-router-dom";
//import "./estiloItemDetail.css"
import ItemDetail from "../ItemDetailContainer/ItemDetail";

const DetailProduct=()=>{
    
    const[products,setProducts]=useState([])
    const[objectProduct,setObjectProduct]=useState({})
    const{id}=useParams()//podria usar directo useParams().id

    //obtengo lista mock para usarla local

    const GetList=()=>{
        return new Promise((resolve,reject)=>{
            return resolve(ProductsMock())
        })
    }

    //ejectuo GetList
    useEffect(()=>{
        GetList().then((products)=>{
            setProducts(products)
            
            GetProduct(products)//llamo funcion GetProduct de abajo, le paso la lista obtenida
        })
    },[])

    //funcion GetProduct, para iterar lista y encontrar product que coincida con id elegido por usuari

    const GetProduct=(products)=>{
       
        products.map((product)=>{
            if(product.id==parseInt(id)){
                setObjectProduct(product)
                
            }
        })
    }

    return(
        <div>
            <ItemDetail data={objectProduct} key={objectProduct.key}/>
        </div>
       
    )

}

export default DetailProduct;