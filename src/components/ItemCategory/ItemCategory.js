
import "./estiloItemCategory.css"
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button'

const ItemCategory=({data})=>{
    //muestra los productos segun categoria que se lo pasa CategoryProducts
    const{product,size,price,brand,img,description,category,id}=data
    

    return(
        <div className="item-category"> 
            
                    <div className="item-list-item-category" key={id}>
                        <Link to={`/productos/${id}`}> <img src={img} alt="Imagen cargando"/></Link>
                        <p>{product} talle: {size}</p>
                        <p>Marca: {brand}</p>
                        <p>$ {price}</p>
                       <Link to={`/productos/${id}`}> <Button>Ver Detalle </Button></Link>
                        </div>
             
        </div>

    )

}

export default ItemCategory;