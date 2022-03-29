import React, {useState,useEffect} from "react"
import Item  from "./Item"
import {ProductsMock,productsMock} from "../MockList/ProductsMock"//al definir asi, primero el archivo, despues la funcion, me deja llamar esa funcion

const ItemList=()=>{
    //1mock list
    /*const productsMock=[{product:"Remera",size:"L",price:1500, brand:"Adidas", id:1,img:"https://www.mundodeportivo.com/files/content_image_mobile_filter/uploads/2022/03/21/62384e1d607c8.jpeg"},
                        {product:"Musculosa",size:"M",price:1000, brand:"Zara", id:2,img:"https://http2.mlstatic.com/D_NQ_NP_938858-MLA40177010309_122019-O.jpg"},
                        {product:"Zapatilla",size:"L",price:3000, brand:"Foos", id:3,img:"https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatilla-john-foos-flashback-negra-305011641857001-1.jpg"},]
                    */

    //2 declaro state parag uardar ahi lista que se obtiene del servidor
    const [listProducts,stateListProducts]=useState([])
    //3 obtener datos con promise

    const getData=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                return resolve(ProductsMock())//llamo a la funcion ProductsMock q me trae return la lista d eobjetos
            },2000)
        })
    }

    //4.then()

    useEffect(()=>{
        getData().then((listProducts)=>{
            stateListProducts(listProducts)
            console.log(listProducts)
        }).catch(()=>{
            console.log("hubo un error en base de datos")
        }).finally(()=>{
            console.log("info obtenida")
        })
    },[])//no recuerdo en que caso se daba como segundo parametro lista vacia, para que se ejecute solo una vez cuando se carga pagina?
 
    //iteracion map. le paso cada objeto como prop a componente Item <Item data={product} key={product.id}/>
    return(

        <div className="item-list">
            {listProducts.map((product)=>{
                
                return null 
                
            })}


        </div>

    )

    }

    export default ItemList;