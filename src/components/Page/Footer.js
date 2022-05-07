import React from "react";
import "./estiloFooter.css"

const Footer=()=>{

    return(
        <div className="footer">
            <div className="footer-right">
            Todos Los derechos Reservados
            ForYou Online Clothing © Copyright - 2022
                        
        </div>
        <div>Las fotos contenidas en este site, el logotipo y las marcas son propiedad de www.foryou.com.ar y/o de sus respectivos titulares. Está prohibida la reproducción total o parcial, sin la expresa autorización de la administradora de la tienda virtual.</div>
        <div className="footer">
        
           <img src="./datafiscal.png" alt="cargando"/>
           <img src="./hotsaletiendaoficial.png" alt="cargando"/>
           <img src="./for-you-clothing.gif" alt="cargando" style={{width:180,height:80}}/>
       </div>
      
       </div>
    )
}

export default Footer