import React,{useState,useEffect} from "react"
import Button from '@mui/material/Button';
import CartWidget from "./Cart";
import { Link } from "react-router-dom";
import Navbar from'react-bootstrap/Navbar'
import Container from'react-bootstrap/Container'
import Nav from'react-bootstrap/Nav'
import NavDropdown from'react-bootstrap/NavDropdown'
import Form from'react-bootstrap/Form'
import FormControl from'react-bootstrap/FormControl'

const NavBar=()=>{

    
  
  
    return(
      <header className="header">
        
        <div className="App-header">
        
         <Navbar id="navbar-b" bg="black" variant="dark" expand="lg"  fixed="top" >
         
  <Container>
    <Navbar.Brand >
    <div className='contenedor-logo'>
          <img src="./logo.png" className="App-logo" alt="logo" />
        </div>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" >
        <Nav.Link ><Link to='/' ><p>Inicio</p></Link></Nav.Link>
        <Nav.Link ><Link to='/productos'><p>Todos los Productos</p></Link></Nav.Link>
        <NavDropdown title="Categorias" id="basic-nav-dropdown" className="dropdown1" >
          <NavDropdown.Item className="dropdown" ><Link to='/productos/categoria/remeras'><p>Remeras</p></Link></NavDropdown.Item>
          <NavDropdown.Item className="dropdown" ><Link to='/productos/categoria/pantalones'><p>Pantalones</p></Link></NavDropdown.Item>
          <NavDropdown.Item  className="dropdown"><Link to='/productos/categoria/calzados'><p>Calzado</p></Link></NavDropdown.Item>
          <NavDropdown.Item className="dropdown" ><Link to='/productos/categoria/invierno'><p>Invierno</p></Link></NavDropdown.Item>
          
          
        </NavDropdown>
        <Nav.Link ><Link to='/nosotros'><p>Nosotros</p></Link></Nav.Link>
        <Nav.Link ><Link to='/contacto'><p>Contactenos</p></Link></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
    <CartWidget/>   
  </Container>
  
</Navbar>
 
            
         </div>
         </header>

    )


}

export default NavBar;
//<CartWidget/> 
/*<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>*/

/* <div className='contenedor-logo'>
          <img src="./logo.png" className="App-logo" alt="logo" />
        </div>
              
            
              <ul className="navegador-ul">S
                <li><Link to='/' >Inicio</Link></li>
                <li><Link to='/productos'>Productos</Link></li>
                <li><Link to='/productos/categoria/remeras'>Remeras</Link></li>
                <li><Link to='/productos/categoria/pantalones'>Pantalones</Link></li>
                <li><Link to='/productos/categoria/calzados'>Calzado</Link></li>
                <li><Link to='/productos/categoria/invierno'>Invierno</Link></li>
                <li><Link to='/nosotros'>Nosotros</Link></li>
                <li><Link to='/contacto'>Contactenos</Link></li>
                <li><Link to='/' className="App-link" target="_blank" rel="noopener noreferrer">Compra ahora</Link></li>
                
              </ul>*/