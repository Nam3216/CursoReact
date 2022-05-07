import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { collection,getDocs } from "firebase/firestore";
import db from "../../firebase";
import SectionTitle from "../SectionTitle/SectionTitle";

const DetailProduct=()=>{
    
    const[products,setProducts]=useState([])
    const[objectProduct,setObjectProduct]=useState({})
    const{id}=useParams()


//obtengo productos desde firebase
    const GetList=async ()=>{
        const items=collection(db,"listProducts")
        const productsSnapshot=await getDocs(items)
        const productsList=productsSnapshot.docs.map((doc)=>{
            let product=doc.data()
            product.id=doc.id
            return product
        })

        productsList.map((product)=>{ //obtengo producto por id que pidio usuario, lo guardo en state objectProduct
            if(product.id==id){
                setObjectProduct(product)
            }
        })
    }

    //ejectuo GetList
    useEffect(()=>{
        GetList()
    },[])

//paso el product a ITemDetail, es el componente que despliega el producto
    return(
        <div>
            <SectionTitle title={objectProduct.product}/>
       
            <div className="item-detail-container">
                
                <ItemDetail data={objectProduct} key={objectProduct.key}/>
            </div>
        </div>
       
    )

}

export default DetailProduct;