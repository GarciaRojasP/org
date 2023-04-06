import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props)  => {
    //Destructuración
    const {titulo, fondo, destaque} = props.datos;
    const {mandarColaboradores} = props

    const fondoEquipo = { backgroundColor: fondo }
    const destaqueEquipo = { borderColor: destaque }

    return <section className="ctn-equipo" style={fondoEquipo}>
                <h3 className="titulo__principal titulo__principal-equipo--modificador" style={destaqueEquipo} > {titulo} </h3>
                <div className="colaboradores">
                    {
                        mandarColaboradores.map( (colaborador, index) => <Colaborador key={index} datos={colaborador}/>)
                    }
                </div>
           </section>
}

export default Equipo