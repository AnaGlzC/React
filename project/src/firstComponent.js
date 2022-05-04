import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return (
        <h1>Hola este es un Class Component {this.props.name} </h1>
         )
    }
}

export default Welcome;

