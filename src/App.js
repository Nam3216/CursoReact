import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navBar/NavBar";
//import NavBarClass  from './components/card-item-list/ejemplo-class/NavBarClass';
//import Cards from "./components/card/Cards.js";
import ItemListContainer from './components/card-item-list/itemListContainer';
//import ArticlesContainer from './components/ejercicios/notas/ArticlesContainer';




function App() {
  return (
    <div className="App">
        <NavBar />
     
        
      <div className='container'>
      
      
        <ItemListContainer>
        <p>Listas 1</p>
        </ItemListContainer>
       
       

      </div>

      
      

           
      
    </div>
   
     
  );
}

export default App;
