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
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function SimulacionRip() {

  useEffect(()=>{
    generarDesafio()
    generarMascara()
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [siguienteEtapa, setSiguienteEtapa] = useState(true);
    const [lineColor, setLineColor] = useState('white');
    const [estado_primera_etapa, setPrimeraEtapa] = useState(false);

    const cambiarEstadoPrimeraEtapa = (nuevoEstado, comandos) => {
      setComandoVariable(comandos)
      setPrimeraEtapa(nuevoEstado)
    };

    const [comandoCisco1PrimeraEtapa, setComandoCisco1PrimeraEtapa] = useState([
      {comando: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado", pista: 'Esto es una ayuda'},
      {comando: "configure terminal", explicacion: "El comando configure terminal se utiliza para acceder al modo de configuración global en dispositivos Cisco"},
      {comando: "router rip", explicacion: "Este comando se utiliza dentro del modo de configuración de RIP en Cisco Packet Tracer para especificar que el enrutador debe utilizar la versión 2 del protocolo RIP en lugar de la versión original (RIP v1)"},
      {comando: "version 2", explicacion: "Este comando se utiliza dentro del modo de configuración de RIP en Cisco Packet Tracer para especificar que el enrutador debe utilizar la versión 2 del protocolo RIP en lugar de la versión original (RIP v1)"},
      {comando: "" , explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.1.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
      {comando: "", explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.2.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
      {comando: "exit", explicacion: "Se utilizar para salir del modo configuracion y volver al modo priviligeado."}
    ]);

    const [comandoCisco2PrimeraEtapa, setComandoCisco2PrimeraEtapa] = useState([
      {comando: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado", pista: 'Esto es una ayuda'},
      {comando: "configure terminal", explicacion: "El comando configure terminal se utiliza para acceder al modo de configuración global en dispositivos Cisco"},
      {comando: "version 2", explicacion: "Este comando se utiliza dentro del modo de configuración de RIP en Cisco Packet Tracer para especificar que el enrutador debe utilizar la versión 2 del protocolo RIP en lugar de la versión original (RIP v1)"},
      {comando: "network 192.168.1.0", explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.1.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
      {comando: "network 192.168.2.0", explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.2.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
      {comando: "exit", explicacion: "Se utilizar para salir del modo configuracion y volver al modo priviligeado."}
    ]);

    const [comandoPCPrimeraEtapa, setComandoPCPrimeraEtapa] = useState([
      {nombre: "Direccion IP", valor: "192.168.1.0", explicacion: "Se asigna la Ip al puerto Ethernet de la computadora"},
      {nombre: "Mascara de subred", valor: "255.255.255.224", explicacion: "Se asigna la mascara de red de la computadora"},
      {nombre: "Puerta de enlace predeterminada", valor: "192.168.1.1", explicacion: "Se asigna la direccion ip del router mas cercano"}
    ]);

    const [mascaras, setMascaras] = useState({
      24 : "0",
      25 : "128",
      26: "192",
      27 : "224",
      28 : "240",
      29: "248",
      30: "252",
    });

    const [mascara, setMascara] = useState("");

    const [comandoVariable, setComandoVariable] = useState([]);

    const [values, setValues] = useState({
      direccion_ip : "",
      mascara : "",
      puerta_enlace: "",
    });

    const generarDesafio = () => {

      
      let primera_red = generarRed()
      actualizarComando(primera_red, 4)

      let segunda_red = generarSegundaRed(primera_red, 2)
      actualizarComando(segunda_red, 5)


      let puerta_enlace = generarSegundaRed(primera_red, 3)

      let direccion_pc = generarSegundaRed(puerta_enlace, 3)

      actualizarComandosPC(puerta_enlace, 2)
      actualizarComandosPC(direccion_pc, 0)

      cookies.set("primera_red", primera_red, { path: "/" });
      cookies.set("segunda_red", segunda_red, { path: "/" });
      cookies.set("direccion_pc", direccion_pc, { path: "/" });
      cookies.set("puerta_enlace", puerta_enlace, { path: "/" });
    };

    const generarRed = () => {

      let primerNumero = generarPrimerNumero().toString()
      let segundoNumero = generarOtrosNumeros().toString()
      let tercerNumero = generarOtrosNumeros().toString()
      let cuartoNumero = '0'

      let network = primerNumero +"."+segundoNumero+"."+tercerNumero+"."+cuartoNumero
      return network
    };

    const generarSegundaRed = (red_generada, indice) => {

      let red_separada = red_generada.split(".")
      let segundo_numero = parseInt(red_separada[indice]) + 1
      red_separada[indice] = segundo_numero.toString()

      let segunda_red = red_separada[0] +"."+red_separada[1]+"."+red_separada[2]+"."+red_separada[3]
      return segunda_red

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

    const abrirModalPC = () => {
      setShowModal(true);
    };

    const pasarSiguienteEtapa = () => {
      if(siguienteEtapa){
        window.location.href = "./simulacionRipSegundaEtapa"
      }else{
        
      }
    };

    const actualizarComandosPC = (nuevoComando, indice) => {
      setComandoPCPrimeraEtapa((prevState) => {
        const nuevoEstado = prevState.map((item, index) => {
          if (index === indice) { 
            return { ...item, valor: nuevoComando };
          }
          return item;
        });
        return nuevoEstado;
      });
    };

    const actualizarComando = (nuevoComando, indice) => {
      setComandoCisco1PrimeraEtapa((prevState) => {
        // Creamos una nueva copia del objeto en el array con el comando actualizado
        const nuevoEstado = prevState.map((item, index) => {
          if (index === indice) { // Suponiendo que solo hay un objeto o queremos cambiar el primer objeto
            return { ...item, comando: "network " + nuevoComando };
          }
          return item;
        });
        return nuevoEstado;
      });
    };

    const generarMascara = () => {
      let max = 24;
      let min = 30;

      var numeroAleatorio = Math.random();
      var primerNumero = Math.floor(numeroAleatorio * (max - min + 1)) + min;

      let mascara = "255.255.255." + mascaras[primerNumero]
      actualizarComandosPC(mascara, 1)
      cookies.set("mascara", mascara, { path: "/" });
    };

  return (
    <>
      <ModalCiscoPrimeraEtapa
        estado1={estado_primera_etapa}
        cambiarEstado1={cambiarEstadoPrimeraEtapa}
        comandosVariable={comandoVariable}
      />

      <Modal show={showModal} onHide={cerrarModal}>
        <Modal.Header closeButton className="bg-info shadow-sm ">
          <Modal.Title>Configuracion de PC</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {comandoPCPrimeraEtapa.map((comando) => {
            return (
              <>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    {comando.nombre}:
                  </label>
                  <input
                    type="text"
                    id={comando.nombre}
                    name={comando.name}
                    className="form-control"
                    value={comando.valor}
                  />
                  <p>{comando.explicacion}</p>
                </div>
              </>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={cerrarModal}>
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
        <MDBCol md="10">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <p style={{ marginLeft: "10px" }}>
              Instrucciones:
              <br />
              1. Entrar a la configuracion de los dispositivos.
              <br />
              2. Leer las instrucciones y explicaciones de los comandos.
              utilizados
              <br />
              3. Pase a la siguiente etapa.
            </p>
          </div>
        </MDBCol>

        <MDBCol md="2">
          <Button variant="danger" onClick={pasarSiguienteEtapa}>
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
                style={{ marginRight: "50px" }}
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
                onClick={() =>
                  cambiarEstadoPrimeraEtapa(
                    !estado_primera_etapa,
                    comandoCisco1PrimeraEtapa
                  )
                }
                style={{ marginRight: "250px" }}
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
                onClick={() =>
                  cambiarEstadoPrimeraEtapa(
                    !estado_primera_etapa,
                    comandoCisco2PrimeraEtapa
                  )
                }
                style={{ marginLeft: "210px" }}
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