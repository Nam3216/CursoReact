import React, {useState,useEffect} from "react"
import Item  from "./Item"
import {ProductsMock} from "../MockList/ProductsMock"//al definir asi, primero el archivo, despues la funcion, me deja llamar esa funcion
import { ClassNames } from "@emotion/react"
import{collection, getDocs} from "firebase/firestore"
import db from "../../firebase"

const ItemList=()=>{
    
    const[loading,setLoading]=useState(true)

    //2 declaro state parag uardar ahi lista que se obtiene del servidor
    const [listProducts,stateListProducts]=useState([])
    //3 obtener datos con promise
    /*const getData=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                return resolve(ProductsMock())//llamo a la funcion ProductsMock q me trae return la lista d eobjetos
            },2000)
        })
    }*/

    /*  useEffect(()=>{
        getData().then((listProducts)=>{
            stateListProducts(listProducts)
            setLoading(false)//cdo obtengo la lista pongo loading false para que muestre la listas
            
        }).catch(()=>{
            console.log("hubo un error en base de datos")
        }).finally(()=>{
            console.log("info obtenida")
        })
    },[])*/
    
     //4.then()

    const getData= async ()=>{
        alert("ok")
        const items=collection(db,"listProducts")
        const productsSnapshot=await getDocs(items)//devuelve array de objetos
       // console.log(productsSnapshot, "snapsho")}
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
    

   
 
    //iteracion map. le paso cada objeto como prop a componente Item <Item data={product} key={product.id}/>
    return(

        <div className="item-list">
            { loading?(
                <p>Cargando</p>
            ):(
            
            listProducts.map((product)=>{
                
                return <Item data={product} key={product.id}  /> 
                
            })
            )}


        </div>

    )

    }

    export default ItemList;

   
