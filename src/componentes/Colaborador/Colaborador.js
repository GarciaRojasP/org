import "./Colaborador.css"

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo} = props.datos

    return <div className="colaborador">
                <div className="encabezado">
                    <img className="encabezado__img" src={foto} alt={nombre}/>
                </div>
                <div className="info">
                    <h4 className="info__nombre">{nombre}</h4>
                    <h5 className="info__actividad">{puesto}</h5>
                </div>
           </div>
}

export default Colaborador