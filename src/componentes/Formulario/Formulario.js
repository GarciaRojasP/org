import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js"
import ListaOpciones from "../CampoTexto/ListaOpciones.js"
import Boton from "../Boton/Boton.js"

const Formulario = () => {

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return <section className="formulario">
                <form onSubmit={manejarEnvio}>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <CampoTexto label="Nombre" placeholder="Ingresar nombre" required={true} />
                    <CampoTexto label="Puesto" placeholder="Ingresar puesto" required/>
                    <CampoTexto label="Foto" placeholder="Ingresar enlace de foto" required/>
                    <ListaOpciones />
                    <Boton>
                        Crear
                    </Boton>
                </form>
           </section>
}

export default Formulario