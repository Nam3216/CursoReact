
import './App.css';
import  {BrowserRouter,Routes,Route}from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect} from "react"
//componentes
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Page/Products"
import DetailProduct from './components/Page/DetailProduct';
import CategoryProduct from './components/Page/CategoryProducts';
import {Home} from "./components/Page/Home"
import {Context} from "./Context/CartContext"
import {CartPage} from "./components/Page/CartPage"
import TransactionPage from './components/Page/TransactionPage';
import Contact from "./components/Page/Contact"
import AboutUs from "./components/Page/AboutUs"
import Footer from './components/Page/Footer';



function App() {

  useEffect(()=>{
    document.title="For You! - Online Clothing"
  },[])
  return (
    <div className="App">
         <Context>
     <div className="content">
  
      <BrowserRouter>
          <NavBar />
      
       
          <main className='container' >
         
          <Routes>
          <Route path="/CursoReact" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/productos" element={<Products/>}/>
            <Route path="/productos/categoria/:category" element={<CategoryProduct/>}/>
            <Route path="/productos/:id" element={<DetailProduct/>}/>
            <Route path="/nosotros" element={<AboutUs/>}/>
            <Route path="/contacto" element={<Contact/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/comprar" element={<TransactionPage/>}/>


          </Routes>
          
          
          
         
          </main>
       
        <footer>
          <Footer/>
        </footer>

        
        

        </BrowserRouter>     
        
    </div>
    </Context>
    </div>
     
  );
}

export default App;
