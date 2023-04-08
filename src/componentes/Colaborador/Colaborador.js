import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {destaque, deleteColaborador, estado} = props

    const destaqueEncabezado = {backgroundColor: destaque}
    return <div className="colaborador">
            <AiFillCloseCircle className="icon__delete" onClick={ () => deleteColaborador(id)} />
                <div className="encabezado" style={destaqueEncabezado}>
                    <img className="encabezado__img" src={foto} alt={nombre}/>
                </div>
                <div className="info">
                    <h4 className="info__nombre">{nombre}</h4>
                    <h5 className="info__actividad">{puesto}</h5>
                    { 
                        fav ? <AiFillHeart className="me-encanta me-encanta--modificado" 
                                           onClick={ () => estado(id) }
                              /> 
                            : 
                              <AiOutlineHeart className="me-encanta"
                                              onClick={ () => estado(id) }
                             />
                    }
                </div>
           </div>
}

export default Colaborador