import React,{useState,useEffect} from "react"
import CarouselJs from "../Carousel/Carousel"
import SectionTitle from "../SectionTitle/SectionTitle"
import db from "../../firebase"
import { collection,getDocs } from "firebase/firestore"
import Item from "../ItemList/Item"
import ShowBrands from "../ShowBrands/ShowBrands"
import "./styleHome.css"



export const Home=()=>{
   const[listProducts,setListProducts]=useState([])

    const GetList=async()=>{
        const items=collection(db,"listProducts")
        const productsSnapshot=await getDocs(items)
        const productList=productsSnapshot.docs.map((doc)=>{
            let product=doc.data()
            product.id=doc.id
            return product
        })
        setListProducts(productList)
        
    }

    useEffect(()=>{
        GetList()
       
    },[])
    // <SectionTitle title={"Las Mejores Marcas. Las Mejores Promociones."} id="title-home"/>
    return(
        <div className="home-container">
            <div className="home-container-container">
               <div className="title-home" >
                    <h3>{"For You Clothing!"}</h3>
                </div>  
            <div className="home">
           
            <CarouselJs/>
                
            
            <div className="offer-container">
            <SectionTitle title={"¡¡Ofertas por Tiempo Limitado!!"} origin={"home"} />
                {listProducts.map((product)=>{
                    if(product.offer=="si"){
                        return <Item data={product} key={product.id}/>
                    }
                })}
            </div>
            
            <ShowBrands/>
            </div>
            </div>
        </div>
    )
}

// loom
//https://www.loom.com/share/c35ec340d46f480c924e2ed8268aee53