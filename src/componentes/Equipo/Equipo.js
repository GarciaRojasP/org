import "./Equipo.css"

const Equipo = (props)  => {
    //Destructuración
    const {titulo, fondo, destaque} = props.datos;

    const fondoEquipo = { backgrounColor: fondo }
    const destaqueEquipo = { borderColor: destaque }

    return <section className="ctn-equipo" style={fondoEquipo}>
                <h3 className="titulo__principal titulo__principal-equipo--modificador" style={destaqueEquipo} > {titulo} </h3>
                <div className="colaboradores">

                </div>
           </section>
}

export default Equipo