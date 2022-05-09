import React,{useState,useEffect} from "react"
import CarouselJs from "../Carousel/Carousel"
import SectionTitle from "../SectionTitle/SectionTitle"
import db from "../../firebase"
import { collection,getDocs } from "firebase/firestore"
import Item from "../card-item-list/Item"
import ShowBrands from "../ShowBrands/ShowBrands"
//import "./estiloHome.css"


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
    
    return(
        <div className="home-container">
                <SectionTitle title={"Las Mejores Marcas. Las Mejores Promociones."}/>
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
            <SectionTitle title={"¡¡Las Mejores Marcas!!"}origin={"home"}/>
            <ShowBrands/>
            </div>
        </div>
    )
}

// loom
//https://www.loom.com/share/c35ec340d46f480c924e2ed8268aee53