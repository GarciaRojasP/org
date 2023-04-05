import "./Equipo.css"

const Equipo = (props)  => {
    return <section className="ctn-equipo">
                <h3 className="titulo__principal titulo__principal-equipo--modificador" >{props.equipo}</h3>
                <div className="colaboradores">

                </div>
           </section>
}

export default Equipo