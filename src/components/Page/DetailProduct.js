import React,{useState,useEffect} from "react";
import {ProductsMock} from "../MockList/ProductsMock"
import { useParams } from "react-router-dom";
//import "./estiloItemDetail.css"
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { collection,getDocs } from "firebase/firestore";
import db from "../../firebase";

const DetailProduct=()=>{
    
    const[products,setProducts]=useState([])
    const[objectProduct,setObjectProduct]=useState({})
    const{id}=useParams()//podria usar directo useParams().id

    //obtengo lista mock para usarla local
/* no uso mas, uso el de firebase
    const GetList=()=>{
        return new Promise((resolve,reject)=>{
            return resolve(ProductsMock())
        })
    }*/

    const GetList=async ()=>{
        const items=collection(db,"listProducts")
        const productsSnapshot=await getDocs(items)
        const productsList=productsSnapshot.docs.map((doc)=>{
            let product=doc.data()
            product.id=doc.id
            return product
        })

        productsList.map((product)=>{ //obtengo producto por id que pidio usuario
            if(product.id==id){
                setObjectProduct(product)
            }
        })
    }

    //ejectuo GetList
    useEffect(()=>{
        GetList()
    },[])

    //funcion GetProduct, para iterar lista y encontrar product que coincida con id elegido por usuari

   /* const GetProduct=(products)=>{ no uso mas, todo en getList
       
        products.map((product)=>{
            if(product.id==parseInt(id)){
                setObjectProduct(product)
                
            }
        })
    }*/

    return(
        <div>
            <ItemDetail data={objectProduct} key={objectProduct.key}/>
        </div>
       
    )

}

export default DetailProduct;