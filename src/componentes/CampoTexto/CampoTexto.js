import "./CampoTexto.css"

const CampoTexto = (props) => {
    console.log(props);
    const placeholderModificado = `${props.placeholder}...`
    return <div className="campo-texto">
                <label className="label">{props.label}</label>
                <input className="input" placeholder={placeholderModificado} required={props.required}/>
           </div>
}

export default CampoTexto