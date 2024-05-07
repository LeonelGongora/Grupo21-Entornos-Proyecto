import React, {useState, useEffect} from  'react';
import ModalCisco1 from "../modals/modal_cisco_1";
import ModalCisco2 from '../modals/modal_cisco_2';
import ModalCiscoPrimeraEtapa from '../modals/modal_cisco_primera_etapa';
import ModalCiscoSegundaEtapa from '../modals/modal_cisco_segunda_etapa';
import Button from 'react-bootstrap/Button';
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import BarraSuperior from '../components/BarraSuperior';

import imagen_cisco from '../images/imagen_router_cisco.jpg'
function SimulacionRip() {

  useEffect(()=>{
    generarDesafio()
  }, []);

    const [estado_primera_etapa, setPrimeraEtapa] = useState(false);
    const [mostrarInstrucciones, setMostrarInstrucciones] = useState(false);

    const cambiarEstadoPrimeraEtapa = (nuevoEstado, comandos) => {
      setComandoVariable(comandos)
      setPrimeraEtapa(nuevoEstado)
    };

    const [comandoCisco1PrimeraEtapa, setComandoCisco1PrimeraEtapa] = useState([
      {comando: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado", pista: 'Esto es una ayuda'},
      {comando: "configure terminal", explicacion: "El comando configure terminal se utiliza para acceder al modo de configuración global en dispositivos Cisco"},
      {comando: "version 2", explicacion: "Este comando se utiliza dentro del modo de configuración de RIP en Cisco Packet Tracer para especificar que el enrutador debe utilizar la versión 2 del protocolo RIP en lugar de la versión original (RIP v1)"},
      {comando: "network 192.168.1.0", explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.1.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
      {comando: "network 192.168.2.0", explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.2.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
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
      {comando: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado", pista: 'Esto es una ayuda'},
      {comando: "configure terminal", explicacion: "El comando configure terminal se utiliza para acceder al modo de configuración global en dispositivos Cisco"},
      {comando: "version 4", explicacion: "Este comando se utiliza dentro del modo de configuración de RIP en Cisco Packet Tracer para especificar que el enrutador debe utilizar la versión 2 del protocolo RIP en lugar de la versión original (RIP v1)"},
      {comando: "network 192.168.1.0", explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.1.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
      {comando: "network 192.168.2.0", explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.2.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
      {comando: "exit", explicacion: "Se utilizar para salir del modo configuracion y volver al modo priviligeado."}
    ]);

    const [comandoVariable, setComandoVariable] = useState([]);

    const generarDesafio = () => {
      let primerNumero = generarPrimerNumero().toString()
      let segundoNumero = generarOtrosNumeros().toString()
      let tercerNumero = generarOtrosNumeros().toString()
      let cuartoNumero = generarOtrosNumeros().toString()

      let network = primerNumero +"."+segundoNumero+"."+tercerNumero+"."+cuartoNumero

      console.log(network)
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

  return (
    <>
      <ModalCiscoPrimeraEtapa
        estado1={estado_primera_etapa}
        cambiarEstado1={cambiarEstadoPrimeraEtapa}
        comandosVariable = {comandoVariable}
      />

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
          <Button  variant="danger" onClick={() => window.location.href = "./simulacionRipSegundaEtapa"}>
            Siguiente etapa
          </Button>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
            <img src={imagen_cisco} className="w-100" />
            <a style={{ cursor: "pointer" }}>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
          <MDBRow>
            <MDBCol className="d-flex align-items-center justify-content-center">
              <Button
                variant="primary"
                onClick={() => cambiarEstadoPrimeraEtapa(!estado_primera_etapa, comandoCisco1PrimeraEtapa)}
              >
                Mostrar Configuracion
              </Button>
            </MDBCol>
          </MDBRow>
        </MDBCol>

        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
            <img src={imagen_cisco} className="w-100" />
            <a style={{ cursor: "pointer" }}>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
          <MDBRow>
            <MDBCol className="d-flex align-items-center justify-content-center">
              <Button
                variant="primary"
                onClick={() => cambiarEstadoPrimeraEtapa(!estado_primera_etapa, comandoCisco2PrimeraEtapa)}
              >
                Mostrar Configuracion
              </Button>
            </MDBCol>
          </MDBRow>
        </MDBCol>

        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
            <img src={imagen_cisco} className="w-100" />
            <a style={{ cursor: "pointer" }}>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
          <MDBRow>
            <MDBCol className="d-flex align-items-center justify-content-center">
              <Button
                variant="primary"
                onClick={() => cambiarEstadoPrimeraEtapa(!estado_primera_etapa, comandoPCPrimeraEtapa)}
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