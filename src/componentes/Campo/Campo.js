import "./Campo.css"

const Campo = (props) => {


    const manejarCambio = (event) => {
        props.set(event.target.value)
    }

    const placeholderModificado = `${props.placeholder}...`

    const {type = "text"} = props
    /*console.log(type)*/

    return <div className={`campo campo-${type}`}>
                <label className="label">{props.label}</label>
                <input className="input" 
                       placeholder={placeholderModificado} 
                       required={props.required} 
                       value={props.value}
                       onChange={manejarCambio}
                       type={type}
                />
           </div>
}

export default Campo