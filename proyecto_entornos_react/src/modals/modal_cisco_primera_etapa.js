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

function ModalCiscoPrimeraEtapa({estado1, cambiarEstado1, comandosVariable, redes}) {

  const [indice, setIndice] = useState(0);
  const [inputComando, setInputComandos] = useState('');
  const [outputComando, setOutputComando] = useState('');
  const [comandoCorrecto, setComandoCorrecto] = useState(false);
  const [posicionComando, setPosicionComando] = useState(0);
  const [comandos, setComandos] = useState([
    ["router", "rip"],
    ["network", "192.168.3.0"],
  ])

  const [comandoPrimeraEtapa, setComandosPrimeraEtapa] = useState([
    {comando: "enable", explicacion: "El comando enable se utiliza para acceder al modo EXEC privilegiado", pista: 'Esto es una ayuda'},
    {comando: "configure terminal", explicacion: "El comando configure terminal se utiliza para acceder al modo de configuración global en dispositivos Cisco"},
    {comando: "version 2", explicacion: "Este comando se utiliza dentro del modo de configuración de RIP en Cisco Packet Tracer para especificar que el enrutador debe utilizar la versión 2 del protocolo RIP en lugar de la versión original (RIP v1)"},
    {comando: "network 192.168.1.0", explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.1.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
    {comando: "network 192.168.2.0", explicacion: "Cuando se ejecuta este comando se esta diciendo al enrutador que busque interfaces con direcciones IP que pertenezcan a la subred 192.168.2.0 y las incluya en el proceso de enrutamiento RIP, es decir, que las incluya en la tabla de enrutamiento del router."},
    {comando: "exit", explicacion: "Se utilizar para salir del modo configuracion y volver al modo priviligeado."}
  ]);

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
              style={{ overflowY: "scroll", height: "380px" }}
            >
              <div className="console">
                {comandosVariable.map((comando) => {
                  return (
                    <>
                    <p>
                    </p>
                      <Row className="mb-3">
                        <Row>
                          <Col>
                            <pre>{">"} {comando.comando}</pre>
                          </Col>
                          <Col xs={2}>
                            <BootstrapTooltip title={comando.pista}>
                              <HelpIcon></HelpIcon>
                            </BootstrapTooltip>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p>
                            {comando.explicacion}
                            </p>
                          </Col>
                        </Row>
                      </Row>
                    </>
                  );
                })}

                <pre>{outputComando}</pre>
              </div>
            </Container>
          </div>
        </div>
      )
    );
  }
  
  export default ModalCiscoPrimeraEtapa;