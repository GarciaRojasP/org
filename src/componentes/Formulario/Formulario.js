import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js"
import ListaOpciones from "../CampoTexto/ListaOpciones.js"
import Boton from "../Boton/Boton.js"

const Formulario = () => {

    const [nombre,setNombre] = useState("");
    const [puesto,setPuesto] = useState("");
    const [foto,setFoto] = useState("");
    const [equipo,setEquipo] = useState("");

    const manejarEnvio = (event) => {
        event.preventDefault();

//      let datosEnviar = {
//          nombre: nombre,
//          puesto: puesto,
//            foto: foto
//      }

        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        console.log(datosEnviar);
    }

    return <section className="formulario">
                <form onSubmit={manejarEnvio}>
                    <h2 className="titulo__principal titulo__principal-formulario--modificador">Rellena el formulario para crear el colaborador.</h2>
                    <CampoTexto label="Nombre" placeholder="Ingresar nombre" required={true} value={nombre} set={setNombre}/>
                    <CampoTexto label="Puesto" placeholder="Ingresar puesto" required value={puesto} set={setPuesto}/>
                    <CampoTexto label="Foto" placeholder="Ingresar enlace de foto" required value={foto} set={setFoto}/>
                    <ListaOpciones value={equipo} set={setEquipo} />
                    <Boton>
                        Crear
                    </Boton>
                </form>
           </section>
}

export default Formulario