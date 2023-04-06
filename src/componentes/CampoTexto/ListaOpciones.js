import "./CampoTexto.css"

//Para recorrer un arreglo se requiere usar map en React
//Método map => arreglo.map( (equipo, index) => {
//  return (colocar etiquetas html)
//})

const ListaOpciones = (props) => {

    const manejarCambio = (event) => {
        props.set(event.target.value)
    }

    return <div className="campo-texto">
                <label className="label" >Equipos</label>
                
                <select className="input select" value={props.value} onChange={manejarCambio}>
                    <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                    { props.equipos.map((equipo, index) => {
                        return <option key={index} value={equipo} >{equipo}</option>
                    })}
                </select>
           </div>
}

export default ListaOpciones