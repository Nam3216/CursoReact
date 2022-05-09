import React from "react";
import ItemList from "../ItemList/ItemList";
import SectionTitle from "../SectionTitle/SectionTitle";


const Products=()=>{
//componente para todos los productos, contiene al itemList. ItemList obtiene los prod de firebase y los despliega a traves de Item
    return (
            <div className="todos-los-productos">
                <SectionTitle title={"Todos Los Productos"} />
                <ItemList/>
               
            </div>)
}

export default Products;