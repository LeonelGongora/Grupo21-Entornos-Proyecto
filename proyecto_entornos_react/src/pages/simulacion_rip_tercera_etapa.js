import React, {useState, useEffect} from  'react';
import ModalCisco2 from '../modals/modal_cisco_2';
import Button from 'react-bootstrap/Button';
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import BarraSuperior from '../components/BarraSuperior';
import { Modal } from 'react-bootstrap';
import CanvasComponentRip from '../components/CanvasComponentRip';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';

const cookies = new Cookies();

function SimulacionRipTerceraEtapa() {

  const primera_red = cookies.get('primera_red');
  const segunda_red = cookies.get('segunda_red');
  const direccion_pc = cookies.get('direccion_pc');
  const puerta_enlace = cookies.get('puerta_enlace');
  const mascara = cookies.get('mascara');

  const [errors, setErrors] = useState({});
  
    const [values, setValues] = useState({
        estado_modal_1 : false
    });

    const [comandoPCPrimeraEtapa, setComandoPCPrimeraEtapa] = useState([
      {nombre: "Direccion IP", direccion_ip: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado"},
      {nombre: "Mascara de subred", mascara: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado"},
      {nombre: "Puerta de enlace predeterminada", puerta_enlace: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado"},
    ]);

    const [showModal, setShowModal] = useState(false);
    const [lineColor, setLineColor] = useState('white');
    const [estado_modal2, setEstadoModal2] = useState(false);
    const [mostrarInstrucciones, setMostrarInstrucciones] = useState(false);

    const cambiarEstadoModal2 = (nuevoEstado) => {
      setEstadoModal2(nuevoEstado)
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
      const validationErrors = {};

      if (!values.direccion_ip.trim()) {
        validationErrors.direccion_ip = "Este campo es obligatorio";
      }else if(values.direccion_ip !== direccion_pc){
        validationErrors.direccion_ip = "Comando incorrecto";
      }
  
      if (!values.mascara.trim()) {
        validationErrors.mascara = "Este campo es obligatorio";
      }else if(values.mascara !== mascara){
        validationErrors.mascara = "Comando incorrecto";
      }

      if (!values.puerta_enlace.trim()) {
        validationErrors.puerta_enlace = "Este campo es obligatorio";
      }else if(values.puerta_enlace !== puerta_enlace){
        validationErrors.puerta_enlace = "Comando incorrecto";
      }
  
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        cerrarModal()
        Swal.fire('PC configurada correctamente', '','success');
      }

    };

    const abrirModalPC = () => {
      setShowModal(true);
    };

  return (
    <>
      <ModalCisco2
        estado1={estado_modal2}
        cambiarEstado1={cambiarEstadoModal2}
      />

      <Modal show={showModal} onHide={cerrarModal}>
        <Modal.Header closeButton className="bg-info shadow-sm ">
          <Modal.Title>Configuracion de PC</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {comandoPCPrimeraEtapa.map((comando) => {
            return <></>;
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
          <h2>Tercera Etapa</h2>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="10">
          <div className="d-flex justify-content-between align-items-center mb-5">
          <p style={{ marginLeft: "10px" }}>
              Instrucciones:
              <br />
              1. Dadas las redes {primera_red} y {segunda_red}, y la mascara{" "}
              {mascara} entrar a las configuraciones de los dispositivos.
              <br />
              2. Ingresar los comandos enteros.
              <br />
              3. En el caso de equivocarse, pasar el cursor por ? para mas
              informacion.
              <br />
              3. Tras configurar todos los dispositivos,  terminar la simulacion.
            </p>
          </div>
        </MDBCol>

        <MDBCol md="2">
          <Button
            variant="danger"
            onClick={() => (window.location.href = "./")}
          >
            Terminar simulacion
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

      <MDBRow className="mb-3">
        <MDBCol className="mb-4 mb-lg-0">
          <MDBRow>
            <MDBCol className="d-flex align-items-center justify-content-center">
              <Button
                variant="primary"
                onClick={() => cambiarEstadoModal2(!estado_modal2)}
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
                onClick={() => cambiarEstadoModal2(!estado_modal2)}
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

export default SimulacionRipTerceraEtapa;