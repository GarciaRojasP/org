import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/MiOrg.js';
import Equipo from './componentes/Equipo/Equipo.js';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //fragmas --> <></>
  //corto circuito --> condicion && seMuestra
  const cambiarEstado = () => {
    actualizarMostrar(!mostrarFormulario);
  }
  return (
    <div>
      <Header />
      {mostrarFormulario ? <Formulario /> : <></> }
      <MiOrg estado={cambiarEstado} />
      <Equipo equipo="Programacion"/>
      <Equipo equipo="Front End"/>
      <Equipo equipo="Data Science" />
      <Equipo equipo="Devops" />
      <Equipo equipo="UX y Diseño" />
      <Equipo equipo="Móvil" />
      <Equipo equipo="Innovación y Gestión" />
    </div>
  );
}

export default App;
