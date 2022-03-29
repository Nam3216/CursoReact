import React from "react";
import ItemList from "../card-item-list/ItemList";
import ItemListContainer from "../card-item-list/itemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const Home=()=>{

    return (
            <div>
                <ItemListContainer/>
                <ItemDetailContainer/>
            </div>)
}

export default Home;