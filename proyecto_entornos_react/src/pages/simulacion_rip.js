import React, {useState, useEffect} from  'react';
import ModalCisco1 from "../modals/modal_cisco_1";
import ModalCisco2 from '../modals/modal_cisco_2';
import ModalCiscoPrimeraEtapa from '../modals/modal_cisco_primera_etapa';
import ModalCiscoSegundaEtapa from '../modals/modal_cisco_segunda_etapa';
import Button from 'react-bootstrap/Button';
import CanvasComponentRip from '../components/CanvasComponentRip';
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import BarraSuperior from '../components/BarraSuperior';
import { Modal } from 'react-bootstrap';

function SimulacionRip() {

  useEffect(()=>{
    generarDesafio()
  }, []);

  let primera_red = ""

  const [showModal, setShowModal] = useState(false);
    const [lineColor, setLineColor] = useState('white');
    const [estado_primera_etapa, setPrimeraEtapa] = useState(false);
    const [siguienteEtapa, setSiguienteEtapa] = useState(true);
    const [redes, setRedes] = useState([]);

    const cambiarEstadoPrimeraEtapa = (nuevoEstado, comandos) => {
      setComandoVariable(comandos)
      setPrimeraEtapa(nuevoEstado)
    };

    const [comandoCisco1PrimeraEtapa, setComandoCisco1PrimeraEtapa] = useState([
      {comando: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado", pista: 'Esto es una ayuda'},
      {comando: "configure terminal", explicacion: "El comando configure terminal se utiliza para acceder al modo de configuración global en dispositivos Cisco"},
      {comando: "version 2", explicacion: "Este comando se utiliza dentro del modo de configuración de RIP en Cisco Packet Tracer para especificar que el enrutador debe utilizar la versión 2 del protocolo RIP en lugar de la versión original (RIP v1)"},
      {comando: "network 192.168.1.0" , explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.1.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
      {comando: "network 192.168.1.0", explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.2.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
      {comando: "exit", explicacion: "Se utilizar para salir del modo configuracion y volver al modo priviligeado."}
    ]);

    const [comandoCisco2PrimeraEtapa, setComandoCisco2PrimeraEtapa] = useState([
      {comando: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado", pista: 'Esto es una ayuda'},
      {comando: "configure terminal", explicacion: "El comando configure terminal se utiliza para acceder al modo de configuración global en dispositivos Cisco"},
      {comando: "version 3", explicacion: "Este comando se utiliza dentro del modo de configuración de RIP en Cisco Packet Tracer para especificar que el enrutador debe utilizar la versión 2 del protocolo RIP en lugar de la versión original (RIP v1)"},
      {comando: "network 192.168.1.0", explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.1.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
      {comando: "network 192.168.2.0", explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.2.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
      {comando: "exit", explicacion: "Se utilizar para salir del modo configuracion y volver al modo priviligeado."}
    ]);

    const [comandoPCPrimeraEtapa, setComandoPCPrimeraEtapa] = useState([
      {nombre: "Direccion IP", direccion_ip: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado"},
      {nombre: "Mascara de subred", mascara: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado"},
      {nombre: "Puerta de enlace predeterminada", puerta_enlace: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado"},
    ]);

    const [comandoVariable, setComandoVariable] = useState([]);

    const generarDesafio = () => {
      let primerNumero = generarPrimerNumero().toString()
      let segundoNumero = generarOtrosNumeros().toString()
      let tercerNumero = generarOtrosNumeros().toString()
      let cuartoNumero = generarOtrosNumeros().toString()

      let network = primerNumero +"."+segundoNumero+"."+tercerNumero+"."+cuartoNumero

      let redes_alt = []
      redes_alt.push(network)

      let primerNumero1 = generarPrimerNumero().toString()
      let segundoNumero1 = generarOtrosNumeros().toString()
      let tercerNumero1 = generarOtrosNumeros().toString()
      let cuartoNumero1 = generarOtrosNumeros().toString()

      let network1 = primerNumero1 +"."+segundoNumero1+"."+tercerNumero1+"."+cuartoNumero1
      redes_alt.push(network1)
      setRedes(redes_alt)

    };

    const generarPrimerNumero = () => {

      let max = 128;
      let min = 223;

      var numeroAleatorio = Math.random();
      var primerNumero = Math.floor(numeroAleatorio * (max - min + 1)) + min;
      return primerNumero;
    };

    const generarOtrosNumeros = () => {

      let max = 0;
      let min = 255;

      var numeroAleatorio = Math.random();
      var primerNumero = Math.floor(numeroAleatorio * (max - min + 1)) + min;
      return primerNumero;
    };

    const cerrarModal = () => {
      setShowModal(false); // Cerrar la ventana emergente
    };

    const handleSubmit =  (e) => {

    };

    const abrirModalPC = () => {
      setShowModal(true);
    };

    const pasarSiguienteEtapa = () => {
      if(siguienteEtapa){
        window.location.href = "./simulacionRipSegundaEtapa"
      }else{
        
      }
      
    };

  return (
    <>
      <ModalCiscoPrimeraEtapa
        estado1={estado_primera_etapa}
        cambiarEstado1={cambiarEstadoPrimeraEtapa}
        comandosVariable = {comandoVariable}
        redes = {redes}
      />

      <Modal show={showModal} onHide={cerrarModal}>
        <Modal.Header closeButton className="bg-info shadow-sm ">
          <Modal.Title>Configuracion de PC</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {comandoPCPrimeraEtapa.map((comando) => {
                  return <>
                  <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
            {comando.nombre}:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre_categoria"
              className="form-control"
            />
          </div>
                  
                  </>;
                })}
          
          <div className="mb-3">
            <label htmlFor="imagen" className="form-label">
              Mascara de subred:
            </label>
            <input
              type="text"
              id="imagen"
              name="imagen"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imagen" className="form-label">
              Puerta de enlace predeterminada:
            </label>
            <input
              type="text"
              id="imagen"
              name="imagen"
              className="form-control"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <BarraSuperior titulo="Simulacion de Protocolo RIP" />

      <MDBRow className="my-3">
        <MDBCol className="d-flex align-items-center justify-content-center">
          <h2>Primera Etapa</h2>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md='10'>
          <div className="d-flex justify-content-between align-items-center mb-5">
              <p style={{ marginLeft: "10px" }}>
                Instrucciones:
                <br />
                1. Entrar a la configuracion de los dispositivos
                <br />
                2. Leer las instrucciones y explicaciones de los comandos utilizados
                <br />
                3. Pase a la siguiente etapa
              </p>
          </div>
        </MDBCol>

        <MDBCol md='2'>
          <Button  variant="danger" onClick={pasarSiguienteEtapa}>
            Siguiente etapa
          </Button>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol className="mb-4 mb-lg-0">
          <MDBRow className="d-flex align-items-center justify-content-center">
            <MDBCol className="d-flex align-items-center justify-content-center">
              <Button
                variant="primary"
                onClick={() => abrirModalPC()}
                style={{ marginRight : '50px' }}
              >
                Mostrar Configuracion
              </Button>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>

      <CanvasComponentRip lineColor={lineColor} />
      
      <MDBRow>
        <MDBCol className="mb-4 mb-lg-0">
          <MDBRow>
            <MDBCol className="d-flex align-items-center justify-content-center">
              <Button
                variant="primary"
                onClick={() => cambiarEstadoPrimeraEtapa(!estado_primera_etapa, comandoCisco1PrimeraEtapa)}
                style={{ marginRight : '250px' }}
              >
                Mostrar Configuracion
              </Button>
            </MDBCol>
          </MDBRow>
        </MDBCol>

        <MDBCol className="mb-4 mb-lg-0">
          <MDBRow>
            <MDBCol className="d-flex align-items-center justify-content-center">
              <Button
                variant="primary"
                onClick={() => cambiarEstadoPrimeraEtapa(!estado_primera_etapa, comandoCisco2PrimeraEtapa)}
                style={{ marginLeft : '210px' }}
              >
                Mostrar Configuracion
              </Button>
            </MDBCol>
          </MDBRow>
        </MDBCol>

      </MDBRow>

    </>
  );
}

export default SimulacionRip;