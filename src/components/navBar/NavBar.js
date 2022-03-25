import React from "react"
import Button from '@mui/material/Button';
import CartWidget from "./cart";

const NavBar=()=>{

    return(
        <header className="App-header">
        <div className='contenedor-logo'>
          <img src="logo192.png" className="App-logo" alt="logo" />
        </div>
              
            
              <ul className="navegador-ul">
                <li><a href='' >Inicio</a></li>
                <li><a href=''>Programas</a></li>
                <li><a href=''>Juegos</a></li>
                <li><a href=''>Contactenos</a></li>
                <li><a href=''>Pagar</a></li>
                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a></li>
                
              </ul>
              
            <CartWidget/> 
         </header>
         

    )


}

export default NavBar;