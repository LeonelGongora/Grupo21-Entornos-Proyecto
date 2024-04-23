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

function SimulacionRip() {

    const [values, setValues] = useState({
        estado_modal_1 : false
    });

    const [estado_modal2, setEstadoModal2] = useState(false);
    const [estado_primera_etapa, setPrimeraEtapa] = useState(false);
    const [estado_segunda_etapa, setSegundaEtapa] = useState(false);

    const cambiarEstadoModal1 = (nuevoEstado) => {
        setValues({
            estado_modal_1:nuevoEstado,
        });
    };

    const cambiarEstadoModal2 = (nuevoEstado) => {
      setEstadoModal2(nuevoEstado)
    };

    const cambiarEstadoPrimeraEtapa = (nuevoEstado) => {
      setPrimeraEtapa(nuevoEstado)
    };

    const cambiarEstadoSegundaEtapa = (nuevoEstado) => {
      setSegundaEtapa(nuevoEstado)
    };

  return (
    <>
      <ModalCisco1
        estado1={values.estado_modal_1}
        cambiarEstado1={cambiarEstadoModal1}
      />

      <ModalCisco2
        estado1={estado_modal2}
        cambiarEstado1={cambiarEstadoModal2}
      />

      <ModalCiscoPrimeraEtapa
        estado1={estado_primera_etapa}
        cambiarEstado1={cambiarEstadoPrimeraEtapa}
      />

      <ModalCiscoSegundaEtapa
        estado1={estado_segunda_etapa}
        cambiarEstado1={cambiarEstadoSegundaEtapa}
      />

<BarraSuperior titulo="Simulacion de Protocolo RIP" />

      <MDBRow>
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
            <img
              src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"
              className="w-100"
            />
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
                onClick={() => cambiarEstadoModal1(!values.estado_modal_1)}
              >
                Mostrar Configuracion
              </Button>
            </MDBCol>
          </MDBRow>
        </MDBCol>

        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
            <img
              src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"
              className="w-100"
            />
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
                onClick={() => cambiarEstadoModal2(!estado_modal2)}
              >
                Mostrar Configuracion
              </Button>
            </MDBCol>
          </MDBRow>
        </MDBCol>

        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
            <img
              src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"
              className="w-100"
            />
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
                onClick={() => cambiarEstadoPrimeraEtapa(!estado_primera_etapa)}
              >
                Mostrar Configuracion
              </Button>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol lg={3}>
          <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
            <img
              src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"
              className="w-100"
            />
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

export default SimulacionRip;