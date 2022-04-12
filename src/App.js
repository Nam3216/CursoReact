import logo from './logo.svg';
import './App.css';
import  {BrowserRouter,Routes,Route}from "react-router-dom"
//componentes
import NavBar from "./components/NavBar/NavBar";
//import Item from "./components/card-item-list/Item"
//import ItemListContainer from './components/card-item-list/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Products from "./components/Page/Products"
import DetailProduct from './components/Page/DetailProduct';
import CategoryProduct from './components/Page/CategoryProducts';
import {Home} from "./components/Page/Home"
import {Context} from "./Context/CartContext"
import {CartPage} from "./components/Page/CartPage"



function App() {
  return (
    <div className="App">
     
     <Context>
      <BrowserRouter>
          <NavBar />
      
        
        <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productos" element={<Products/>}/>
          <Route path="/productos/categoria/:category" element={<CategoryProduct/>}/>
          <Route path="/productos/:id" element={<DetailProduct/>}/>
          <Route path="/nosotros" element={<p>Hola</p>}/>
          <Route path="/contacto" element={<p>Hola</p>}/>
          <Route path="/cart" element={<CartPage/>}/>


        </Routes>
        
        
        

        </div>
        

        
        

        </BrowserRouter>     
      </Context>
    </div>
   
     
  );
}

export default App;
