import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import {ProductsMock} from "../MockList/ProductsMock"
import ItemCategory from "../ItemCategory/ItemCategory"

const CategoryProduct=()=>{
    
    const {category}=useParams()
    
    const[products,setProducts]=useState([])
    //obtengo una promise la lista mock
    const GetList=()=>{
        return new Promise((resolve,reject)=>{
            return resolve(ProductsMock())
        })
    }
//la capturo con el then
    useEffect(()=>{
        
        GetList().then((products)=>{
            setProducts(products)
            
            
        })
    },[])
//la paso a componente ITemCategory que es el q muestra los productos
    return(
        <div>
            {products.map((item)=>{
                
                if(item.category==category){
                   
                    return <ItemCategory data={item} key={item.id}/>
                }
            })}
        </div>
    )
}

export default CategoryProduct;