import logo from './logo.svg';
import './App.css';
import  {BrowserRouter,Routes,Route}from "react-router-dom"
//componentes
import NavBar from "./components/navBar/NavBar";
import Item from "./components/card-item-list/Item"
import ItemListContainer from './components/card-item-list/itemListContainer';
//import ArticlesContainer from './components/ejercicios/notas/ArticlesContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Home from "./components/Page/Home"

//<ItemDetailContainer/> poner esto

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <NavBar />
     
        
      <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={<div>Hola</div>}/>


      </Routes>
      
       
       

      </div>

      
      

      </BrowserRouter>     
      
    </div>
   
     
  );
}

export default App;
