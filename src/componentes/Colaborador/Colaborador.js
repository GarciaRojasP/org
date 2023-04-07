import "./Colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai"

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id} = props.datos
    const {destaque, deleteColaborador} = props

    const destaqueEncabezado = {backgroundColor: destaque}
    return <div className="colaborador">
            <AiFillCloseCircle className="icon__delete" onClick={ () => deleteColaborador(id)} />
                <div className="encabezado" style={destaqueEncabezado}>
                    <img className="encabezado__img" src={foto} alt={nombre}/>
                </div>
                <div className="info">
                    <h4 className="info__nombre">{nombre}</h4>
                    <h5 className="info__actividad">{puesto}</h5>
                </div>
           </div>
}

export default Colaborador