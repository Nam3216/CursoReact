import React,{useState,useEffect} from "react"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Navbar from'react-bootstrap/Navbar'
import Container from'react-bootstrap/Container'
import Nav from'react-bootstrap/Nav'
import NavDropdown from'react-bootstrap/NavDropdown'
import CartContext from "../../Context/CartContext"
import { useContext } from "react";



const NavBar=()=>{

    const{cartList}=useContext(CartContext)
    const[checkNavBar,setCheckNavBar]=useState(true)//para menu sticky
  

    useEffect(()=>{
      window.addEventListener("scroll", handleScroll)
      return()=>{
        window.removeEventListener("scroll",handleScroll)
      }
    },[])

    const handleScroll=()=>{
      
   
        
        if(window.scrollY>80){
        
          setCheckNavBar(false)
          console.log("true")
          
        }
        if(window.scrollY<80){
          
          setCheckNavBar(true)
        }
    }
  //fixed="top"//{checkNavBar==false ?"top":" "}
    return(
      <header className="header" >
        {console.log(checkNavBar,"navbar")}
        <div className="App-header">
        
         <Navbar id={ checkNavBar==true ? "navbar-b" : "navbar-sticky"} bg="black" variant="dark" expand="lg" fixed="top"  >
         
  <Container className="navbar-cont" >
    <Navbar.Brand >
      <div className='contenedor-logo' >
        <img src="./for-you-clothing.gif"  className={ checkNavBar ? "App-logo": "App-logo-sticky"} alt="logo" />
      </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" >
        <Nav.Link ><Link to='/' ><p >Inicio</p></Link></Nav.Link>
        <Nav.Link ><Link to='/productos'><p >Todos los Productos</p></Link></Nav.Link>
        <NavDropdown title="Categorias" id="basic-nav-dropdown" className="dropdown1" >
          <NavDropdown.Item className="dropdown" id="dropdown-menu" ><Link to='/productos/categoria/remeras'><p >Remeras  </p></Link></NavDropdown.Item>
          <NavDropdown.Item className="dropdown" id="dropdown-menu" ><Link to='/productos/categoria/pantalones'><p>Pantalones</p></Link></NavDropdown.Item>
          <NavDropdown.Item  className="dropdown"id="dropdown-menu" ><Link to='/productos/categoria/calzados'><p>Calzado</p></Link></NavDropdown.Item>
          <NavDropdown.Item className="dropdown" id="dropdown-menu" ><Link to='/productos/categoria/invierno'><p>Invierno</p></Link></NavDropdown.Item>
          
          
        </NavDropdown>
        <Nav.Link ><Link to='/cart'><p >Acceder a carrito</p></Link></Nav.Link>
        <Nav.Link ><Link to='/nosotros'><p >Nosotros</p></Link></Nav.Link>
        <Nav.Link ><Link to='/contacto'><p >Contactenos</p></Link></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
      {cartList.length>0 &&(
        <CartWidget/>  
      )} 
  </Container>
  
</Navbar>
 
            
         </div>
         </header>

    )


}

export default NavBar;
