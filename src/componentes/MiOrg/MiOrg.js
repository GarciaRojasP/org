import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //useState()
    //const [nombreVariable,funcionActualiza] = useState(valorInicial);

    return <section className="orgSectio">
                <h3 className="titulo__principal titulo__principal-miorg--modificador">Mi Organización</h3>
                <img src="/img/add.png" alt="boton de agregar" onClick={props.estado}/>
           </section>
}

export default MiOrg