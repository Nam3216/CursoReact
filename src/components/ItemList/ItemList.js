import React, {useState,useEffect} from "react"
import Item  from "./Item"
//import { ClassNames } from "@emotion/react"
import{collection, getDocs} from "firebase/firestore"
import db from "../../firebase"
import Spinner from 'react-bootstrap/Spinner'

const ItemList=()=>{
    
    const[loading,setLoading]=useState(true)

    //2 declaro state parag uardar ahi lista que se obtiene del servidor
    const [listProducts,stateListProducts]=useState([])
   

    const getData= async ()=>{
        
        const items=collection(db,"listProducts")
        const productsSnapshot=await getDocs(items)//devuelve array de objetos
  
        const productsList=productsSnapshot.docs.map((doc)=>{
            let product=doc.data()
            product.id=doc.id
            return product
        })
        setTimeout(()=>{
            stateListProducts(productsList)
            setLoading(false)
        },2000)
        

    }
        
    console.log(listProducts,"list")

    useEffect(()=>{

        getData()
            
        },[])
    

   //<p>Cargando</p>
 
    //iteracion map. le paso cada objeto como prop a componente Item <Item data={product} key={product.id}/>
    return(

        <div className="item-list">
            { loading?(
                <Spinner animation="border" variant="primary" className="spinner"/>
            ):(
            
            listProducts.map((product)=>{
                
                return <Item data={product} key={product.id}  /> 
                
            })
            )}


        </div>

    )

    }

    export default ItemList;

   
