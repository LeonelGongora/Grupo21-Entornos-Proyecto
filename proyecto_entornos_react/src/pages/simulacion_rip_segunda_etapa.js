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
import { Modal } from 'react-bootstrap';
import imagen_cisco from '../images/imagen_router_cisco.jpg'
import CanvasComponentRip from '../components/CanvasComponentRip';

function SimulacionRipSegundaEtapa() {

  const [showModal, setShowModal] = useState(false);
  const [lineColor, setLineColor] = useState('white');

    const [estado_segunda_etapa, setSegundaEtapa] = useState(false);
    const [mostrarInstrucciones, setMostrarInstrucciones] = useState(false);

    const [comandoPCPrimeraEtapa, setComandoPCPrimeraEtapa] = useState([
      {nombre: "Direccion IP", direccion_ip: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado"},
      {nombre: "Mascara de subred", mascara: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado"},
      {nombre: "Puerta de enlace predeterminada", puerta_enlace: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado"},
    ]);

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

    const cerrarModal = () => {
      setShowModal(false); // Cerrar la ventana emergente
    };

    const handleSubmit =  (e) => {

    };

    const abrirModalPC = () => {
      setShowModal(true);
    };

  return (
    <>

      <ModalCiscoSegundaEtapa
        estado1={estado_segunda_etapa}
        cambiarEstado1={cambiarEstadoSegundaEtapa}
      />

<Modal show={showModal} onHide={cerrarModal}>
        <Modal.Header closeButton className="bg-info shadow-sm ">
          <Modal.Title>Configuracion de PC</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {comandoPCPrimeraEtapa.map((comando) => {
                  return <>
                  
                  </>;
                })}
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Direccion IP:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre_categoria"
              className="form-control"
            />
          </div>
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

      <MDBRow className="mb-3">

        <MDBCol className="mb-4 mb-lg-0">
          <MDBRow>
            <MDBCol className="d-flex align-items-center justify-content-center">
              <Button
                variant="primary"
                onClick={() => cambiarEstadoSegundaEtapa(!estado_segunda_etapa)}
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
                onClick={() => cambiarEstadoSegundaEtapa(!estado_segunda_etapa)}
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

export default SimulacionRipSegundaEtapa;