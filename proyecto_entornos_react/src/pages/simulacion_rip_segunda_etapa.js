import React, {useState, useEffect} from  'react';
import ModalCiscoSegundaEtapa from '../modals/modal_cisco_segunda_etapa';
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

function SimulacionRipSegundaEtapa() {

  const primera_red = cookies.get('primera_red');
  const segunda_red = cookies.get('segunda_red');
  const direccion_pc = cookies.get('direccion_pc');
  const puerta_enlace = cookies.get('puerta_enlace');
  const mascara = cookies.get('mascara');
  const comandos_2da_etapa_rip = cookies.get('comandos_2da_etapa_rip');

  useEffect(()=>{
    establecerComandos();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [lineColor, setLineColor] = useState('white');
  const [errors, setErrors] = useState({});

  const [comandoVariable, setComandoVariable] = useState([]);

    const [estado_segunda_etapa, setSegundaEtapa] = useState(false);

    const [comandoPC2daEtapa, setComandoPCPrimeraEtapa] = useState([
      {nombre: "Direccion IP", direccion_ip: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado"},
      {nombre: "Mascara de subred", mascara: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado"},
      {nombre: "Puerta de enlace predeterminada", puerta_enlace: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado"},
    ]);

    const [comandosSegundaEtapa, setComandosSegundaEtapa] = useState([
      {comando: "configure", respuesta: "terminal", posicion : 1 , pista: "", orden: "primero"},
      {comando: "router", respuesta: "rip", posicion : 1 , pista: "", orden: "segundo"},
      {comando: "2", respuesta: "version", posicion : 0 , pista: "", orden: "tercero"},
      {comando: "network", respuesta: "", posicion : 1 , pista: "", orden: "cuarto"},
      {comando: "network", respuesta: "", posicion : 1 , pista: "", orden: "quinto"},
    ]);

    const [values, setValues] = useState({
      direccion_ip : "",
      mascara : "",
      puerta_enlace: "",
    });
    
    const cambiarEstadoSegundaEtapa = (nuevoEstado, comandos) => {
      setSegundaEtapa(nuevoEstado)
      setComandoVariable(comandos)
    };

    const cerrarModal = () => {
      setShowModal(false); // Cerrar la ventana emergente
    };

    const abrirModalPC = () => {
      setShowModal(true);
    };

    const handleChange = (e) => {
      const {name, value} = e.target;
      setValues({
          ...values,
          [name]:value,
      });
    }

    const handleSubmit = (e) => {

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
    }

    const establecerComandos = () => {
      setComandosSegundaEtapa(comandos_2da_etapa_rip);
      actualizarRedes2daEtapa(primera_red, 3);
      actualizarRedes2daEtapa(segunda_red, 4);
    }

    const actualizarRedes2daEtapa = (nuevoComando, indice) => {
      setComandosSegundaEtapa((prevState) => {
        const nuevoEstado = prevState.map((item, index) => {
          if (index === indice) { 
            return { ...item, respuesta: nuevoComando };
          }
          return item;
        });
        return nuevoEstado;
      });
    };

  return (
    <>
      <ModalCiscoSegundaEtapa
        estado1={estado_segunda_etapa}
        cambiarEstado1={cambiarEstadoSegundaEtapa}
        comandosVariable={comandoVariable}
      />

      <Modal show={showModal} onHide={cerrarModal}>
        <Modal.Header closeButton className="bg-info shadow-sm ">
          <Modal.Title>Configuracion de PC</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {comandoPC2daEtapa.map((comando) => {
            return <></>;
          })}
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Direccion IP:
            </label>
            <input
              type="text"
              id="nombre"
              name="direccion_ip"
              className="form-control"
              onBlur={handleChange}
            />
            {errors.direccion_ip && (
              <span className="advertencia-creEve">{errors.direccion_ip}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="imagen" className="form-label">
              Mascara de subred:
            </label>
            <input
              type="text"
              id="imagen"
              name="mascara"
              className="form-control"
              onBlur={handleChange}
            />
            {errors.mascara && (
              <span className="advertencia-creEve">{errors.mascara}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="imagen" className="form-label">
              Puerta de enlace predeterminada:
            </label>
            <input
              type="text"
              id="imagen"
              name="puerta_enlace"
              className="form-control"
              onBlur={handleChange}
            />
            {errors.puerta_enlace && (
              <span className="advertencia-creEve">{errors.puerta_enlace}</span>
            )}
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
              1. Dadas las redes {primera_red} y {segunda_red}, y la mascara{" "}
              {mascara} entrar a las configuraciones de los dispositivos.
              <br />
              2. Completar las palabras faltantes en los comandos respectivos.
              <br />
              3. En el caso de equivocarse, pasar el cursor por ? para mas
              informacion.
              <br />
              3. Tras configurar todos los dispositivos, pase a la siguiente etapa.
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
                onClick={() => cambiarEstadoSegundaEtapa(!estado_segunda_etapa, comandosSegundaEtapa)}
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
                onClick={() => cambiarEstadoSegundaEtapa(!estado_segunda_etapa)}
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

export default SimulacionRipSegundaEtapa;