import React, {useState, useEffect} from  'react';
import ModalCisco1 from "../modals/modal_cisco_1";
import ModalCisco2 from '../modals/modal_cisco_2';
import ModalCiscoPrimeraEtapa from '../modals/modal_cisco_primera_etapa';
import ModalCiscoSegundaEtapa from '../modals/modal_cisco_segunda_etapa';
import Button from 'react-bootstrap/Button';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
} from 'mdb-react-ui-kit';
import BarraSuperior from '../components/BarraSuperior';

import imagen_cisco from '../images/imagen_router_cisco.jpg'

function SimulacionRipSegundaEtapa() {

    const [estado_segunda_etapa, setSegundaEtapa] = useState(false);
    const [mostrarInstrucciones, setMostrarInstrucciones] = useState(false);

    const cambiarEstadoSegundaEtapa = (nuevoEstado) => {
      setSegundaEtapa(nuevoEstado)
    };

    const generarDesafio = () => {

      let max = 10;
      let min = 5;

      var numeroAleatorio = Math.random();

      // Ajustar el número al rango dado y redondearlo al entero más cercano
      var numeroEnRango = Math.floor(numeroAleatorio * (max - min + 1)) + min;
    };

  return (
    <>

      <ModalCiscoSegundaEtapa
        estado1={estado_segunda_etapa}
        cambiarEstado1={cambiarEstadoSegundaEtapa}
      />

      <BarraSuperior titulo="Simulacion de Protocolo RIP" />

      <MDBRow className="my-3">
        <MDBCol className="d-flex align-items-center justify-content-center">
          <h2>Segunda Etapa</h2>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="10">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <p style={{ marginLeft: "10px" }}>
              Instrucciones:
              <br />
              1. Entrar a la configuracion de los dispositivos
              <br />
              2. Leer las instrucciones y explicaciones de los comandos
              utilizados
              <br />
              3. Pase a la siguiente etapa
            </p>
          </div>
        </MDBCol>

        <MDBCol md="2">
          <Button
            variant="danger"
            onClick={() =>
              (window.location.href = "./simulacionRipTerceraEtapa")
            }
          >
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
                onClick={() => cambiarEstadoSegundaEtapa(!estado_segunda_etapa)}
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
                onClick={() => cambiarEstadoSegundaEtapa(!estado_segunda_etapa)}
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
                onClick={() => cambiarEstadoSegundaEtapa(!estado_segunda_etapa)}
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

export default SimulacionRipSegundaEtapa;