import React,{useState} from "react"
import "./estiloShowBrands.css"

const ShowBrands=()=>{
    const[listBrands,setListBrands]=useState([
        {
        img:"https://d13xymm0hzzbsd.cloudfront.net/1/20210909/16312244820236.png",
        brand:"Nike",
        },{
        img:"https://fashionunited.com.ar/wUnmk6KgsCryzbxXMbPjX0x7YfQwfcoQ22u0JajMP9s/resize:fill:1200:630:1/gravity:ce/quality:70/aHR0cHM6Ly9mYXNoaW9udW5pdGVkLmNvbS9pbWcvdXBsb2FkLzIwMjIvMDEvMTMvam9obi1mb29zLTEtYWhiMGJ3ZWUtMjAyMi0wMS0xMy5qcGVn.jpeg",
        brand:"John Foos",
        },{
        img:"https://fotos.perfil.com/2020/05/15/trim/1280/720/zara-957144.jpg",
        brand:"Zara ",
        },{
        img:"https://cnnespanol.cnn.com/wp-content/uploads/2019/03/190321010304-0320-levis-jeans-01-super-169.jpg?quality=100&strip=info",
        brand:"Levis",
        }
        ])
    return(
        <div className="brands-container">
            {listBrands.map((product)=>{
                return(
                    <div className="brand">
                        <img src={product.img} alt="cargando"/>
                        <p>{product.brand}</p>

                     </div>   
                )
            })}

        </div>


    )
}

export default ShowBrands