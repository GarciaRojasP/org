import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props)  => {
    //Destructuración
    const {titulo, fondo, destaque} = props.datos;
    const {mandarColaboradores} = props
    /*console.log(mandarColaboradores.length > 0)*/

    const fondoEquipo = { backgroundColor: fondo }
    const destaqueEquipo = { borderColor: destaque }

    return <> 
                { 
                    mandarColaboradores.length > 0 &&
                    <section className="ctn-equipo" style={fondoEquipo}>
                        <h3 className="titulo__principal titulo__principal-equipo--modificador" style={destaqueEquipo} > {titulo} </h3>
                        <div className="colaboradores">
                            {
                                mandarColaboradores.map( (colaborador, index) => <Colaborador key={index} 
                                                                                              datos={colaborador}
                                                                                              destaque={destaque}
                                                                                />
                                                        )
                            }
                        </div>
                    </section>
                }
            </>
}

export default Equipo