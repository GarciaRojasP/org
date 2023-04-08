import { useState } from "react"
import { v4 as uuid } from 'uuid';
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js"
import ListaOpciones from "../CampoTexto/ListaOpciones.js"
import Boton from "../Boton/Boton.js"

const Formulario = (props) => {
    //Colaboradores
    const [nombre,setNombre] = useState("");
    const [puesto,setPuesto] = useState("");
    const [foto,setFoto] = useState("");
    const [equipo,setEquipo] = useState("");

    //equipo
    const [titulo,setTitulo] = useState("")
    const [destaque,setDestacado] = useState("");

    const { addColaborador, addEquipo } = props

    const manejarEnvio = (event) => {
        event.preventDefault();

//      let datosEnviar = {
//          nombre: nombre,
//          puesto: puesto,
//            foto: foto
//      }

        let datosEnviar = {
            id: uuid(),
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosEnviar)
        addColaborador(datosEnviar);
    }

    const manejarNuevoEquipo = (event) => {
        event.preventDefault();
        addEquipo({titulo,destaque}) /*Definir como un objeto */
    }

    return <section className="formulario">
                <form onSubmit={manejarEnvio}>
                    <h2 className="titulo__principal titulo__principal-formulario--modificador">Crear el colaborador.</h2>
                    <CampoTexto label="Nombre" placeholder="Ingresar nombre" required={true} value={nombre} set={setNombre}/>
                    <CampoTexto label="Puesto" placeholder="Ingresar puesto" required value={puesto} set={setPuesto}/>
                    <CampoTexto label="Foto" placeholder="Ingresar enlace de foto" required value={foto} set={setFoto}/>
                    <ListaOpciones value={equipo} set={setEquipo} equipos={props.equipos}/>
                    <Boton>
                        Crear colaborador
                    </Boton>
                </form>
                <form onSubmit={manejarNuevoEquipo}>
                    <h2 className="titulo__principal titulo__principal-formulario--modificador">Crear el equipo.</h2>
                    <CampoTexto label="Titulo" placeholder="Ingresar nombre" required value={titulo} set={setTitulo}/>
                    <CampoTexto label="Color" placeholder="Ingresar el color" required value={destaque} set={setDestacado}/>
                    <Boton>
                        Registrar equipo
                    </Boton>
                </form>
           </section>
}

export default Formulario