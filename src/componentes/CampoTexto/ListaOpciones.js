import "./CampoTexto.css"

//Para recorrer un arreglo se requiere usar map en React
//Método map => arreglo.map( (equipo, index) => {
//  return (colocar etiquetas html)
//})
const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión"
]

const ListaOpciones = () => {
    return <div className="campo-texto">
                <label className="label" >Equipos</label>
                <select className="input select">
                    { equipos.map((equipo, index) => {
                        return <option key={index}>{equipo}</option>
                    })}
                </select>
           </div>
}

export default ListaOpciones