import React, {useState, useEffect} from  'react';
import '../css/modal_window_style.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import HelpIcon from '@mui/icons-material/Help';
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

function ModalCiscoPrimeraEtapa({estado1, cambiarEstado1}) {

  const [inputComando, setInputComandos] = useState('');
  const [outputComando, setOutputComando] = useState('');
  const [comandoCorrecto, setComandoCorrecto] = useState(false);
  const [posicionComando, setPosicionComando] = useState(0);
  const [comandos, setComandos] = useState([
    ["router", "rip"],
    ["network", "192.168.3.0"],
  ])
  const [mensaje, setMensaje] = useState('');

    const salirVentanaModal =  () => {
        cambiarEstado1(false);
    };

    const handleInputChange = (event) => {
      setInputComandos(event.target.value);
    };
  
    const handleCommandSubmit = (event) => {
      event.preventDefault();
      // Procesar el comando
      const result = processCommand(inputComando);
      // Actualizar el estado de salida con el resultado
      setOutputComando(outputComando + '> ' + inputComando + '\n' + result + '\n');
      // Limpiar el estado de entrada
      setInputComandos('');
    };
  
    const processCommand = (command) => {
      //let comandos = [
        //["router", "rip"],
        //["network", "192.168.3.0"],
      //];
      let comando_ingresado_separado = command.trim().split(" ");

      if (comandos[posicionComando].length !== comando_ingresado_separado.length) {
        setMensaje("Pista para el estudiante");
        return "Comando no reconocido. Mantenga cursor en ? para mas informacion";
      }
      return compararComando(comandos[posicionComando], comando_ingresado_separado)

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
                <h1>Primera Etapa</h1>
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
                  <Row>
                    <Col>
                      <p>
                        El comando enable se utiliza para acceder al modo EXEC
                        privilegiado
                      </p>
                    </Col>
                  </Row>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col>
                      <pre>{">"} configure terminal</pre>
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={"aasass"}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                      El comando configure terminal se utiliza para acceder al modo de configuración global en dispositivos Cisco
                      </p>
                    </Col>
                  </Row>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col>
                      <pre>{">"} version 2</pre>
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={"aasass"}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={10}>
                      <p>
                      Este comando se utiliza dentro del modo de configuración 
                      de RIP en Cisco Packet Tracer para especificar que el enrutador debe 
                      utilizar la versión 2 del protocolo RIP en lugar de la versión original (RIPv1).
                      </p>
                    </Col>
                  </Row>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col>
                      <pre>{">"} network 192.168.1.0</pre>
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={"aasass"}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={10}>
                      <p>
                      Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP 
                      que pertenezcan a la subred 192.168.1.0 y las incluya en el proceso de enrutamiento RIP, es decir, 
                      que las incluya en la tabla de enrutamiento del router.
                      </p>
                    </Col>
                  </Row>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col>
                      <pre>{">"} network 192.168.2.0</pre>
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={"aasass"}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={10}>
                      <p>
                      Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP 
                      que pertenezcan a la subred 192.168.2.0 y las incluya en el proceso de enrutamiento RIP, es decir, 
                      que las incluya en la tabla de enrutamiento del router.
                      </p>
                    </Col>
                  </Row>
                </Row>

                <Row className="mb-3">
                  <Row>
                    <Col>
                      <pre>{">"} exit</pre>
                    </Col>
                    <Col xs={2}>
                      <BootstrapTooltip title={"aasass"}>
                        <HelpIcon></HelpIcon>
                      </BootstrapTooltip>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={10}>
                      <p>
                      Se utilizar para salir del modo configuracion y volver al modo priviligeado.
                      </p>
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
                    Ingresar
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
  
  export default ModalCiscoPrimeraEtapa;