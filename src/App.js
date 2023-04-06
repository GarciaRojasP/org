import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/MiOrg.js';
import Equipo from './componentes/Equipo/Equipo.js';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, setColaboradores] = useState([])

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

  //Lista de equipos
  const equipos = [
                    {
                      titulo: "Programación",
                      fondo: "#D9F7E9",
                      destaque: "#57C278 "
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
                  ]
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
                                  /> )
      }
      
    </div>
  );
}

export default App;
