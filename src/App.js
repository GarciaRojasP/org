import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/MiOrg.js';
import Equipo from './componentes/Equipo/Equipo.js';
import Footer from './componentes/Footer/Footer.js';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, setColaboradores] = useState([
                                                      {
                                                      nombre:"Harland Lohora",
                                                      puesto: "Instructor",
                                                      foto: "https://github.com/harlandlohora.png",
                                                      equipo: "Programación"
                                                      },
                                                      {
                                                        nombre:"Genesy Rondón",
                                                        puesto: "Desarrolladora de software e instructora",
                                                        foto: "https://github.com/genesysaluralatam.png",
                                                        equipo: "UX y Diseño"
                                                      },
                                                      {
                                                        nombre:"Jeanmarie Quijada",
                                                        puesto: "Instructora en Alura Latam",
                                                        foto: "https://github.com/JeanmarieAluraLatam.png",
                                                        equipo: "Front End"
                                                      }
                                                    ])
  
  const [equipos, setEquipos] = useState([
                                          {
                                            titulo: "Programación",
                                            fondo: "#D9F7E9",
                                            destaque: "#57C278"
                                          },
                                          {
                                            titulo: "Front End",
                                            fondo: "#E8F8FF",
                                            destaque: "#82CFFA"
                                          },
                                          {
                                            titulo: "Data Science",
                                            fondo: "#F0F8E2",
                                            destaque: "#A6D157"
                                          },
                                          {
                                            titulo: "Devops",
                                            fondo: "#FDE7E8",
                                            destaque: "#E06B69"
                                          },
                                          {
                                            titulo: "UX y Diseño",
                                            fondo: "#FAE9F5",
                                            destaque: "#DB6EBF"
                                          },
                                          {
                                            titulo: "Móvil",
                                            fondo: "#FFF5D9",
                                            destaque: "#FFBA05"
                                          },
                                          {
                                            titulo: "Innovación y  Gestión",
                                            fondo: "#FFEEDF",
                                            destaque: "#FF8A29"
                                          }
                                        ])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //fragmas --> <></>
  //corto circuito --> condicion && seMuestra
  const cambiarEstado = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo coladorador", colaborador)
    //Spread operator
    setColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaboradores
  const eliminarColaborador = () => {
    console.log("Elimar colaborador");
  }

  //Actualizar color de equipos
  const actualizarColor = (color, titulo) => {
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.titulo === titulo){
        equipo.destaque = color;
      }
      return equipo
    })
    setEquipos(equiposActualizados);
  }

  return (
    <div>
      <Header />
      {
        mostrarFormulario ? <Formulario equipos={equipos.map( (equipo) => equipo.titulo )} 
                                        addColaborador={registrarColaborador}
                           /> : <></> 
      }
      
      <MiOrg estado={cambiarEstado} />

      {
        equipos.map( (equipo) =>  <Equipo datos={equipo} 
                                          key={equipo.titulo}
                                          mandarColaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                                          deleteColaborador={eliminarColaborador}
                                          updateColor={actualizarColor}
                                  /> )
      }
      
      <Footer />
    </div>
  );
}

export default App;
