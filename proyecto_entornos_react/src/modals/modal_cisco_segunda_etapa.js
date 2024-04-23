import React, {useState, useEffect} from  'react';
import '../css/modal_window_style.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import '../css/error_mensaje_style.css'

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} placement="top"/>
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.info.dark,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.info.dark,
  },
}));

function ModalCiscoSegundaEtapa({estado1, cambiarEstado1}) {

  const [inputComando, setInputComandos] = useState('');
  const [outputComando, setOutputComando] = useState('');
  const [comandoCorrecto, setComandoCorrecto] = useState(false);
  const [posicionComando, setPosicionComando] = useState(0);
  const [comandos, setComandos] = useState([
    ["router", "rip"],
    ["network", "192.168.3.0"],
  ])
  const [mensaje, setMensaje] = useState('');

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    primero: "",
    segundo: "",
    tercero: "",
    cuarto: "",
    quinto: "",
    sexto: "",
    septimo: "",
  });

    const salirVentanaModal =  () => {
        cambiarEstado1(false);
    };

    const handleInputChange = (event) => {
      setInputComandos(event.target.value);
    };
  
    const handleCommandSubmit = (event) => {
      const validationErrors = {};

      console.log(values.primero);

      if (!values.primero.trim()) {
        validationErrors.primero = "Este campo es obligatorio";
      }

      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        console.log("Sin errores");
      }
    };

    const handleInput = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };

    const compararComando = (comando_esperado, comando_ingresado)=>{

      for (let i = 0; i < comando_esperado.length; i++) {
        if (comando_esperado[i] !== comando_ingresado[i].toLowerCase()) {
          setMensaje("Pista para el estudiante");
          return (
            'Comando no reconocido. Error en "' +
            comando_ingresado[i] +
            '". Mantenga cursor en ? para mas informacion'
          );
        }

        if (i === comando_esperado.length - 1) {
          let nueva_posicion = posicionComando + 1;
          if(nueva_posicion >= comandos.length){
            document.getElementById('Entrada de comandos1').readOnly = true;
            return "Correcto. Este router ya se encuentra configurado!";
          }
          setPosicionComando(nueva_posicion)
          return "Correcto.";
        }
      }
    }

    return (
      estado1 && (
        <div className="Overlay">
          <div className="ContenedorModal">
            <div className="EncabezadoModal">
              <div className="tituloEvento">
                <h1>Segunda Etapa</h1>
              </div>

              <button className="BotonSalir" onClick={salirVentanaModal}>
                salir
              </button>
            </div>
            <Container
              className="overflow-auto my-4"
              style={{ overflowY: "scroll", height: "300px" }}
            >
              <div className="console">
                <Row className="mb-3">
                  <Row>
                    <Col>
                      <pre>{">"} enable</pre>
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={"aasass"}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                </Row>

                <Row className="mb-3">
                  <Col xs={2}>
                    <pre>{">"} configure </pre>
                  </Col>
                  <Col xs={2}>
                    <input
                      style={{ width: "100px" }}
                      name="primero"
                      onBlur={handleInput}
                    ></input>

                    {errors.primero && (
                      <span className="advertencia-creEve">
                        {errors.primero}
                      </span>
                    )}
                  </Col>

                  <Col xs={2}>
                    <BootstrapTooltip title={"aasass"}>
                      <HelpIcon></HelpIcon>
                    </BootstrapTooltip>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col>
                      <pre>
                        {">"} Version <input style={{ width: "100px" }}></input>
                      </pre>
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={"aasass"}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col>
                      <pre>
                        {">"} Version <input style={{ width: "100px" }}></input>
                      </pre>
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={"aasass"}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col>
                      <pre>
                        {">"} Version <input style={{ width: "100px" }}></input>
                      </pre>
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={"aasass"}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col>
                      <pre>
                        {">"} Version <input style={{ width: "100px" }}></input>
                      </pre>
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={"aasass"}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                </Row>

                <pre>{outputComando}</pre>
              </div>
            </Container>
            <Container>
              <Row>
                <Col sm={1} style={{ paddingRight: "0px" }}>
                  Router
                  <span>&gt; </span>
                </Col>
                <Col style={{ paddingLeft: "0px" }}>
                  <Form onSubmit={handleCommandSubmit}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su comando"
                        onChange={handleInputChange}
                        value={inputComando}
                        id="Entrada de comandos1"
                      />
                    </Form.Group>
                  </Form>
                </Col>
                <Col sm={2}>
                  <Button variant="warning" onClick={handleCommandSubmit}>
                    Ingresar comandos
                  </Button>
                </Col>

                <Col sm={1}>
                  <BootstrapTooltip title={mensaje}>
                    <HelpIcon></HelpIcon>
                  </BootstrapTooltip>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )
    );
  }
  
  export default ModalCiscoSegundaEtapa;