import React, {useState, useEffect} from 'react'
import diceIcon from "./images/icon-dice.svg"
import "./styles.css"

export const Card = () => {
    const [text, setText] = useState("consejo")
    const [numero, setNumero] = useState(5)
    const api = "https://api.adviceslip.com/advice"

    useEffect(() => {
        generacion()
    }, [])

    const generacion = async () => {
        const data = await fetch(api)
        const datos = await data.json()
        setNumero(datos.slip.id)
        setText(datos.slip.advice)
    }

    return (
        <main>
            <h1>Advice #{numero}</h1>
            <p className='texto'>"{text}"</p>

            <div className='division'></div>
            <button onClick={generacion}><img src={diceIcon} alt="icon dice" /></button>
        </main>
    )
}
