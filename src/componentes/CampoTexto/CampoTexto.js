import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`
    return <div className="campo-texto">
                <label className="label">{props.label}</label>
                <input className="input" placeholder={placeholderModificado} />
           </div>
}

export default CampoTexto