import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props)  => {
    //Destructuración
    const {titulo, fondo, destaque} = props.datos;
    const {mandarColaboradores, deleteColaborador, updateColor} = props
    /*console.log(mandarColaboradores.length > 0)*/

    const fondoEquipo = { backgroundColor: hexToRgba(destaque, 0.3) }
    const borderTitulo = { borderColor: destaque }

    return <> 
                { 
                    mandarColaboradores.length > 0 &&
                    <section className="ctn-equipo" style={fondoEquipo}>
                        <input type="color" 
                               className="input-color" 
                               value={destaque} onChange={(evento) => {
                                                                        updateColor(evento.target.value, titulo);
                                                                      }} 
                        />

                        <h3 className="titulo__principal titulo__principal-equipo--modificador" style={borderTitulo} > {titulo} </h3>
                        <div className="colaboradores">
                            {
                                mandarColaboradores.map( (colaborador, index) => <Colaborador key={index} 
                                                                                              datos={colaborador}
                                                                                              destaque={destaque}
                                                                                              deleteColaborador={deleteColaborador}
                                                                                />
                                                        )
                            }
                        </div>
                    </section>
                }
            </>
}

export default Equipo