import React, {useState, useEffect} from  'react';
import '../css/modal_window_style.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
function ModalCisco1({estado1, cambiarEstado1}) {

  const [inputComando, setInputComandos] = useState("ejemplo");
  const [outputComando, setOutputIngresado] = useState("");

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
      setOutputIngresado(outputComando + '> ' + inputComando + '\n' + result + '\n');
      // Limpiar el estado de entrada
      setInputComandos('');
    };
  
    const processCommand = (command) => {
      let comandos_disponibles = ['']
      // Simulación de procesamiento de comandos
      switch (command.toLowerCase()) {
        case 'help':
          return 'Lista de comandos disponibles: help, echo [texto], clear';
        case 'clear':
          return '';
        default:
          if (command.startsWith('echo ')) {
            return command.substring(5);
          }
          return 'Comando no reconocido. Escribe "help" para obtener ayuda.';
      }
    };


    return (
      estado1 && (
        <div className="Overlay">
          <div className="ContenedorModal">
            <div className="EncabezadoModal">
              <div className="tituloEvento">
                <h1>Consola de Comandos Cisco No 1</h1>
              </div>

              <button className="BotonSalir" onClick={salirVentanaModal}>
                salir
              </button>
            </div>
            <Container className="my-4">
              <div className="console">
                <pre>{outputComando}</pre>
              </div>
            </Container>
            <Container>
              <Row>
                <Col>
                  <form onSubmit={handleCommandSubmit}>
                    <span>&gt; </span>
                    <input
                      type="text"
                      value={inputComando}
                      onChange={handleInputChange}
                      autoFocus
                    />
                  </form>
                </Col>
                <Col>
                  <Button variant="warning" onClick={handleCommandSubmit}>
                    Ingresar
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )
    );
  }
  
  export default ModalCisco1;