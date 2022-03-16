import React from "react"
import Button from '@mui/material/Button';


const NavBar=()=>{

    return(
        <header className="App-header">
        <div className='contenedor-logo'>
          <img src="logo192.png" className="App-logo" alt="logo" />
        </div>
              
            
              <ul className="navegador-ul">
                <li><Button variant="outlined"><a href=''>Inicio</a></Button></li>
                <li><a href=''>Programas</a></li>
                <li><a href=''>Juegos</a></li>
                <li><a href=''>Contactenos</a></li>
                <li><a href=''>Pagar</a></li>
                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a></li>
              </ul>
              
   
         </header>
         

    )


}

export default NavBar;