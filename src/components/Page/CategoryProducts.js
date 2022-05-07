import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import ItemCategory from "../ItemCategory/ItemCategory"
import SectionTitle from "../SectionTitle/SectionTitle"
import { collection,firestore, getDocs } from "firebase/firestore"
import db from "../../firebase"


const CategoryProduct=()=>{
    
    const {category}=useParams()
    
    const[products,setProducts]=useState([])
    
//obtengo los productos desde firestore
    const GetList=async()=>{
        const items=collection(db,"listProducts")
        const productsSnapshot=await getDocs(items)

        const productList=productsSnapshot.docs.map((doc)=>{
            let product=doc.data()
            product.id=doc.id
            return product
        })
        setProducts(productList)
    }

    useEffect(()=>{
        
        GetList()
    },[])
//la paso a componente ITemCategory que es el q muestra los productos
    return(
        <div>
            <SectionTitle title={`CATEGORIA ${category.toUpperCase()}`}/>
            <div className="item-category-products">
            {products.map((item)=>{
                
                if(item.category==category){
                   
                    return <ItemCategory data={item} key={item.id}/>
                }
            })}
            </div>
        </div>
    )
}

export default CategoryProduct;