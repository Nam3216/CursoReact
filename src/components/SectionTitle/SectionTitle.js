import React from "react"
import "./estiloSectionTitle.css"
const SectionTitle=({title,origin})=>{

    return(
        <div className={origin=="home"? "todos-banner2" : "todos-banner"} >
            <h3>{title}</h3>
        </div>
    )
}

export default SectionTitle