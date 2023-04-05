import { useState } from "react"
import "./MiOrg.css"

const MiOrg = () => {
    //Estado - hooks
    //useState
    //useState()
    //const [nombreVariable,funcionActualiza] = useState(valorInicial);

    const [nombre,actualizarNombre] = useState("Harland")
    const [mostrar,actualizarMostar] = useState(true)

    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostar(!mostrar);
    }

    return <section className="orgSectio">
                <h3 className="titulo__principal titulo__principal-miorg--modificador">Mi Organización {nombre}</h3>
                <img src="/img/add.png" alt="boton de agregar" onClick={manejarClick}/>
           </section>
}

export default MiOrg