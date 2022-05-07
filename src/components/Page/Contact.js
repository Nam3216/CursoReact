import React,{useState} from "react"
import "./estiloContact.css"
import SectionTitle from "../SectionTitle/SectionTitle"

const Contact=()=>{
    const[information,setInformation]=useState({
        name:"",
        email:"",
        phone:"",
        text:""
    })
    //funcin para obtener los datos de cada input y guardarlo en el objeto information
    const handleContact=(e)=>{
        e.preventDefault()
       setInformation({...information,[e.target.name]:e.target.value})
        

    }
    //console.log(information,"information outfuncion")

    const sendData=(e)=>{
        e.preventDefault()
        alert("send")
    }
 
    return(
         <div >
             <SectionTitle title={"Contacto"}/>
             <div className="contact-container">
            <form onSubmit={sendData}> 
                <label for="name"><h4>Ingresa tu nombre</h4></label>
                <input type="text" placeholder="Escriba su nombre" name="name" className="form-contact"  onChange={handleContact}/>
                <label for="email"><h4>Ingresa tu Email</h4></label>
                <input type="text" placeholder="Escriba su email" name="email" className="form-contact"onChange={handleContact}/>
                <label for= "phone"><h4>Ingresa tu Telefono</h4></label>
                <input type="text" placeholder="Escriba su Telefono" name="phone" className="form-contact"onChange={handleContact}/>
                <label for= "text"></label>
                <h4>Ingresa tu Comentario o pregunta</h4>
                <textarea id="text-area" placeholder="Escriba su comentario o pregunta" name="text" className="form-contact"onChange={handleContact}></textarea>
          
                <label for="send"></label>
                <input type="submit" value="Enviar"/>
            </form> 
            </div>
            
       


        </div>
      
    )
}

export default Contact