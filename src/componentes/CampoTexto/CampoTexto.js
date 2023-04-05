import "./CampoTexto.css"

const CampoTexto = (props) => {


    const manejarCambio = (event) => {
        props.set(event.target.value)
    }

    const placeholderModificado = `${props.placeholder}...`

    return <div className="campo-texto">
                <label className="label">{props.label}</label>
                <input className="input" 
                       placeholder={placeholderModificado} 
                       required={props.required} 
                       value={props.value}
                       onChange={manejarCambio}
                />
           </div>
}

export default CampoTexto