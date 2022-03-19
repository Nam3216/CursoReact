import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import NavBarClass  from './components/NavBarClass';
//import Cards from "./components/card/Cards.js";
import ItemListContainer from './components/card/itemListContainer';
import ArticlesContainer from './components/notas/ArticlesContainer';

function App() {
  return (
    <div className="App">
        <NavBar />
      
        
      <div className='container'>
        
        <ItemListContainer>
        <p>Listas 1</p>
        </ItemListContainer>
        <ItemListContainer/>

      </div>

      <ArticlesContainer/>
      

           
      
    </div>
   
     
  );
}

export default App;
