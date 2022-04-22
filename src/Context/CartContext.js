import React,{Children, createContext,useState,useEffect} from "react"

const CartContext=createContext()

const Context=({children})=>{
    const[cartList,setCartList]=useState([])
    const[count,setCount]=useState(0)//es para el contador de productos que se ve en carrito navegadr
    const[check,setCheck]=useState(true)//cdo cambia esto que se ejecute counter. sino en el addProduct cdo no cambia lista, pero si cantidad no se ejecutaba
    const[price,setPrice]=useState(0)//aca se guarda price total nuevo cdo se modifica cant desde cartpage
    const[checkForTotalPrice,setCheckForTotalPrice]=useState(true)//si es true, muestra precio segun como se abrio cartPage , si cambia este estado false es porque se cambio cantidad desde cartPage, entonces muestra nueva cantidasd que se guarda price
    const[finalPrice,setFinalPrice]=useState(0)

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


//para contador despues de delete product //para el contador que muestra la cantidad total del carrito en cartwidget
    const Counter=()=>{
        let counter=0
        cartList.map((product)=>{
            counter=counter+product.quantity
        })
        setCount(counter)
       
    }
//modificarCantidad, es el onClick de ITemCount en CartPahge. se activa cuando usuario modifica cantidad de producto en el carrito
    const modifyQuantity=(quantity,product)=>{
        console.log(quantity,product,"modify")
        cartList.map((item)=>{
            if(item.id==product.id){
                item.quantity=quantity
            }
        })
        TotalPrice(product)
    
    }

    //cuando se modifica cantidad, se corre funcion Counter para que actualice el total que aparece cartWidget
    useEffect(()=>{
    
        Counter()
    },[modifyQuantity])
    
 //funcion para vaciar lista carrito 
     const RemoveAll=()=>{
         
         setCartList([])
         setCount(0)
     }   
     //calcula el totalprice por producto para CartPage, devuelve estado que se muestra en cartpage. esta funcion es llamada desde onclick itemcount modifyQuantity(esa funcion esta en cartPage)
     const TotalPrice=(product)=>{
         cartList.map((item)=>{
             if(product.id==item.id){
               setPrice(product.quantity*product.price)//pone como estado el nuevo precio que se va a ver en CartPrice
             }
             setCheckForTotalPrice(false)//comprobacion para mostrar en cartPage uno u otro precio
             setCheckForTotalPrice(true)//una vez que se muestra vuelve a true
             
         })

     }

     const SumPrice=()=>{
         let sum=0
         let totalForProduct=0
         cartList.map((product)=>{
             totalForProduct=product.quantity*product.price
             sum=sum+totalForProduct
         })
         setFinalPrice( sum)
     }

    console.log(cartList, "lista oka")
    const dataContext={cartList,addProduct,deleteProduct,RemoveAll,TotalPrice,price,checkForTotalPrice,count, finalPrice, SumPrice,modifyQuantity}

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