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
  const [posicionComando, setPosicionComando] = useState(0);
  const [comandos, setComandos] = useState([
    ["router", "rip"],
    ["network", "192.168.3.0"],
  ])

  const [comandosSegundaEtapa, setComandosSegundaEtapa] = useState([
    {comando: "enable", respuesta: "El com", posicion : 1 },
  ]);

  const [pistas, setPistas] = useState(['', '', '', '', '']);

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
        pistas[0] = 'Pista 1';
      }else if(values.primero !== "terminal"){
        validationErrors.primero = "Comando incorrecto";
        pistas[0] = 'Pista 2';
      }

      if (!values.segundo.trim()) {
        validationErrors.segundo = "Este campo es obligatorio";
      }else if(values.segundo !== "version"){
        validationErrors.segundo = "Comando incorrecto";
      }

      if (!values.tercero.trim()) {
        validationErrors.tercero = "Este campo es obligatorio";
      }else if(values.tercero !== "version"){
        validationErrors.tercero = "Comando incorrecto";
      }

      if (!values.cuarto.trim()) {
        validationErrors.cuarto = "Este campo es obligatorio";
      }else if(values.cuarto !== "2"){
        validationErrors.cuarto = "Comando incorrecto";
      }

      if (!values.quinto.trim()) {
        validationErrors.quinto = "Este campo es obligatorio";
      }else if(values.quinto !== "exit"){
        validationErrors.quinto = "Comando incorrecto";
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
                  </Row>
                </Row>

                {comandosSegundaEtapa.map((comando) => {
                  return <></>;
                })}

                <Row className="mb-3">
                  <Col xs={2} style={{ paddingRight: "0px" }}>
                    <pre>{">"} configure </pre>
                  </Col>
                  <Col xs={2} style={{ paddingLeft: "0px" }}>
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
                    <BootstrapTooltip title={pistas[0]}>
                      <HelpIcon></HelpIcon>
                    </BootstrapTooltip>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col xs={2}>
                      <pre>
                        {">"}{" "}
                        <input
                          style={{ width: "100px" }}
                          name="segundo"
                          onBlur={handleInput}
                        ></input>
                        {errors.segundo && (
                          <span className="advertencia-creEve">
                            {errors.segundo}
                          </span>
                        )}
                      </pre>
                    </Col>
                    <Col xs={2}>
                      <pre>2</pre>
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={pistas[1]}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col xs={2}>
                      <pre>{">"} network</pre>
                    </Col>
                    <Col xs={2}>
                      <input
                        style={{ width: "100px" }}
                        name="tercero"
                        onBlur={handleInput}
                      ></input>

                      {errors.tercero && (
                        <span className="advertencia-creEve">
                          {errors.tercero}
                        </span>
                      )}
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={pistas[2]}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col xs={2}>
                      <pre>{">"} network</pre>
                    </Col>
                    <Col xs={2}>
                      <input
                        style={{ width: "100px" }}
                        name="cuarto"
                        onBlur={handleInput}
                      ></input>

                      {errors.cuarto && (
                        <span className="advertencia-creEve">
                          {errors.cuarto}
                        </span>
                      )}
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={pistas[3]}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col xs={3}>
                      <pre>{">"}  <input
                        style={{ width: "100px" }}
                        name="quinto"
                        onBlur={handleInput}
                      ></input>

                      {errors.quinto && (
                        <span className="advertencia-creEve">
                          {errors.quinto}
                        </span>
                      )}</pre>
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={pistas[4]}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                </Row>
              </div>
            </Container>
            <Container>
              <Row className='d-flex align-items-center justify-content-center'>
                <Col sm={4} className='d-flex align-items-center justify-content-center'>
                  <Button variant="warning" onClick={handleCommandSubmit}>
                    Ingresar comandos
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )
    );
  }
  
  export default ModalCiscoSegundaEtapa;