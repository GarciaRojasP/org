import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/MiOrg.js';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //fragmas --> <></>
  //corto circuito --> condicion && seMuestra
  const cambiarEstado = () => {
    actualizarMostrar(!mostrarFormulario);
  }
  return (
    <div>
      <Header />
      {/*mostrarFormulario === true ? <Formulario /> : <div></div>*/}
      {/*mostrarFormulario ? <Formulario /> : <div></div> */}
      {/*mostrarFormulario === true ? <Formulario /> : <></>*/} 
      {mostrarFormulario && <Formulario />}
      <MiOrg estado={cambiarEstado} />
    </div>
  );
}

export default App;
