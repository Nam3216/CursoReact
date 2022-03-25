import React from "react"

export default class CardClass extends React.Component{
    constructor(props){//por constructor y super recibe las props
        super(props)
    }
    render(){
        return(

            <div class="card">
            <p>{this.props.title}</p>
            <p>Precio: {this.props.price}</p>
            <p>Talle: XL {this.props.talle}</p>
            <button>Comprar</button>


    </div>


    )
    }

}