
import { useEffect, useState } from "react"

export function Ex1() {

    const[numero, setNumero] = useState(0)

    useEffect(() => {
        alert(`o estado numero mudou. O numero é ${numero}`)
    }, [numero])

    return (
        <section>
            <h2>Exemplo 1</h2>

            <div>
                <h3>numero: {numero}</h3>
                <button onClick={() => setNumero(numero + 1)}>aumentar</button>
            </div>
        </section>
    )
}