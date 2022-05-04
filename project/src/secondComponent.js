import React from "react";

function Bienvenido(props){
    console.log(props);

    return (
        <h1>
            Hola este es un Functional Component {props.nombre}
        </h1>
         )
}

export default Bienvenido