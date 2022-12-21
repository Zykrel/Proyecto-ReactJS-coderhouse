import { useState } from "react";

export const ContadorPractica = () =>{

const [counter, setCounter] = useState(1)

const sumar = () => {
    if(counter < 30)
    setCounter( counter + 1 )
}

const restar = () => {
        if (counter > 1) {
            setCounter( counter - 1 )
        }
    }

    return(
        <div className="btn-group mt-4" role="group" aria-label="Basic button group">
            <button type="button" onClick={restar} className="btn btn-primary">-</button>
            <button type="button" className="btn btn-primary">{counter}</button>
            <button type="button" onClick={sumar} className="btn btn-primary">+</button>
        </div>
    )
}