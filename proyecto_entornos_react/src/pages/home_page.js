import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import protocolo_rip from '../images/protocolo_rip.PNG'
import imagen_cableado from '../images/imagen_cableado.png'
import protocolo_bgp from '../images/protocolo_bgp.jpg'
import protocolo_ospf from '../images/protocolo_ospf.jpg'
import BarraSuperior from '../components/BarraSuperior';
function HomePage() {

    const RedirigirRIP = () => {
      window.location.href = "./simulacionRip";
    };

    const DirigirCableado = () => {
      window.location.href = "./simulacion_cableado";

    };
    
  return (
    <>

     <BarraSuperior titulo="Simulaciones" />

      <MDBContainer fluid className="my-5 text-center">
        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard onClick={RedirigirRIP}>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage src={protocolo_rip} fluid className="w-100" />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">
                          Protocolos
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">
                    Simulacion de Protocolo RIP V2
                  </h5>
                </a>
                <a href="#!" className="text-reset">
                  <p></p>
                </a>
                <h6 className="mb-3">Una descripcion</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard onClick={DirigirCableado}>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={imagen_cableado}
                  fluid
                  style={{ width: "66%", height: "auto" }}
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">Cableado</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Simulacion de Cableado</h5>
                </a>
                <h6 className="mb-3">Una descripcion</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard onClick={() => window.location.href = "./simulacionBGP"}>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage src={protocolo_bgp} fluid className="w-100" />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">
                          Protocolos
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">
                    Simulacion de Protocolo BGP
                  </h5>
                </a>
                <a href="#!" className="text-reset">
                  <p></p>
                </a>
                <h6 className="mb-3">Una descripcion</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" lg="4" className="mb-4">
          <MDBCard onClick={RedirigirRIP}>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage src={protocolo_ospf} fluid className="w-100" />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">
                          Protocolos
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">
                    Simulacion de Protocolo OSPF
                  </h5>
                </a>
                <a href="#!" className="text-reset">
                  <p></p>
                </a>
                <h6 className="mb-3">Una descripcion</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4"></MDBCol>
          <MDBCol md="6" lg="4" className="mb-4"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default HomePage;
