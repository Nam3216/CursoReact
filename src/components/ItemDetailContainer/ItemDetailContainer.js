import React,{useState,useEffect}from "react"
import ItemDetail from "./ItemDetail"
//importo el js con el el mock de productos
import {ProductsMock} from "../MockList/ProductsMock"//al definir asi, primero el archivo, despues la funcion, me deja llamar esa funcion
//import ItemListContainer from "../card-item-list/itemListContainer"
//import Item from "../card-item-list/Item"



const ItemDetailContainer=()=>{

  
    //hoook
    const [description, stateDescription]=useState([])
    const[value,stateValue]=useState(0)

    //obtener promise
        const GetItem=()=>{
            return new Promise ((resolve,reject)=>{
                setTimeout(()=>{
                    return resolve(ProductsMock())
                },2000)

            })
        }
//moun useEffect
        useEffect(()=>{
            GetItem().then((description)=>{
                stateDescription(description)
                console.log(description,"description")
            
            })
        },[])

    //funcion onclick para boton ver detalle de Item.js en ItemListContainer, iba a item

    /*const detail=(id)=>{
        stateValue(JSON.stringify(id.id))

    }*/

    //funcion onclick para no show iba a item detail
   /* const noShow=()=>{
        stateValue(0)
    }*/
    console.log("idprod",value) 

    return(
        <div>
            
            <div className="item-detail-container">  
                {
                description.map((product)=>{
                   
                        
                            return <ItemDetail dataOk={product} key={product.id} />
                        
                    
                        
                                
                    
                })}
                

            </div>
        </div>

    )
}

export default ItemDetailContainer;