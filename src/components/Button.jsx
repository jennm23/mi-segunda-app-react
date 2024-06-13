import React from "react"

export function Button(){
    function responderAlEventoClick(){
        alert("El usuario le dio click")
    }

    function pasoPorArriba() {
        alert("paso por arriba");
    }
    return <button onMouseOver={pasoPorArriba}>Click me!</button>
}