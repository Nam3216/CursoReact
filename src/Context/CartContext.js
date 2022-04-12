import React,{Children, createContext,useState,useEffect} from "react"

const CartContext=createContext()

const Context=({children})=>{
    const[cartList,setCartList]=useState([])
    const[count,setCount]=useState(0)//es para el contador de productos que se ve en carrito navegadr
    const[check,setCheck]=useState(true)//cdo cambia esto que se ejecute counter. sino en el addProduct cdo no cambia lista, pero si cantidad no se ejecutaba
    const[price,setPrice]=useState(0)//aca se guarda price total nuevo cdo se modifica cant desde cartpage
    const[checkForTotalPrice,setCheckForTotalPrice]=useState(true)//indicador para saber si en cartPage columna Precio total muestra primero el precio total segun lista carrito, si cambia este estado es porque se cambio cantidad desde cartPage, entonces muestra nueva cantidasd que se guarda price

    const addProduct=(product,quantity)=>{
        console.log("add", quantity)
        product.quantity=quantity//cantidad del producto va a ser la q recibe la funcion
        console.log(product)
     
        let check=true
        cartList.map((item)=>{//funcion para ver si esta repetido. si esta repetido es false, no lo agrega de nuevo, pero si actualiza cantidad
            
         
            if(item.id==product.id){
                item.quantity=item.quantity+quantity
                check=false
                setCheck(false)
                
                
            }
        })
        
        //if check==true, osea no encontro producto igual, que se actualice la lista       
        //hacer que cdo se cambia cantidad de un prod q ya esta en lista se actualice counter
        check && setCartList([...cartList,product])
           
         
    }
    
//el setCartList termina de actualizarse luego de q termina funcion addCart o delete, asique aca llamo useEffect para que llame a Counter una vez que se actualice cartlist
    useEffect(()=>{
    
        Counter()
    },[cartList])

    useEffect(()=>{//con esto se actualiza si cambia cantidad por un addProduct de itemDetail
        Counter()
        setCheck(true)
    },[check])
    useEffect(()=>{//con esto se actualiza si cambia cantidad en cartPage, porque se actualiza el counter cdo cambia el checkForTotalPrice
        Counter()
        setCheck(true)
    },[checkForTotalPrice])

  
//funcion para borrar un producto
    const deleteProduct=(product)=>{
        
       // setCartList(cartList.filter(item=>item.id!=product.id))//ya lo borra solo del html
       let renew=cartList.filter(item=>item.id!=product.id)
       setCartList(renew)
      
        
    }


//para contador despues de delete product //para el contador de cantidad en cart
    const Counter=()=>{
        
        
        let counter=0
        cartList.map((product)=>{
            counter=counter+product.quantity
        })
        setCount(counter)
       
    }

    
   
 //funcion para vaciar lista carrito 
     const RemoveAll=()=>{
         
         setCartList([])
         setCount(0)
     }   
     //calcula el totalprice para CartPage, devuelve estado que se muestra en cartpage. esta funcion es llamada desde onclick itemcount modifyQuantity(esa funcion esta en cartPage)
     const TotalPrice=(product)=>{
         cartList.map((item)=>{
             if(product.id==item.id){
               setPrice(product.quantity*product.price)//pone como estado el nuevo precio que se va a ver en CartPrice
             }
             setCheckForTotalPrice(false)//comprobacion para mostrar en cartPage uno u otro precio

             
         })

     }

    console.log(cartList, "lista oka")
    const dataContext={cartList,addProduct,deleteProduct,RemoveAll,TotalPrice,price,checkForTotalPrice,count}

    return(
        <div>
            <CartContext.Provider value={dataContext}>
                {children}
            </CartContext.Provider>
        </div>

    )
}

export default CartContext
export {Context}