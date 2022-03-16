import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import NavBarClass  from './components/NavBarClass';
//import Cards from "./components/card/Cards.js";
import ListProducts from './components/card/CardContainer';

function App() {
  return (
    <div className="App">
        <NavBar />
      
        
      <div className='container'>
        
        <ListProducts>
        <p>Listas 1</p>
        </ListProducts>
        <ListProducts/>

      </div>
      
      

           
      
    </div>
   
     
  );
}

export default App;
