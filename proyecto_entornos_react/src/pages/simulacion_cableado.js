
import BarraSuperior from '../components/BarraSuperior';
import BotonTipoCable from '../components/BotonTipoCable';
import imagen_cable_serial from '../images/imagen_cable_serial.jpg';
import imagen_cable_ethernet from '../images/imagen_cable_ethernet.jpg';
import imagen_cable_consola from '../images/imagen_cable_consola.jpg';
import CanvasComponent from '../components/CanvasComponent';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Simulacion_cableado(props) {

  const [mostrarInstrucciones, setMostrarInstrucciones] = useState(true);
  const [textoBoton, setTextoBoton] = useState('Iniciar Simulación');
  const [lineColor, setLineColor] = useState('white'); // Estado para almacenar el color de las líneas

  const cambiarTextoBoton = () => {
    setTextoBoton(textoBoton === 'Iniciar Simulación' ? 'Volver a mostrar instrucciones' : 'Iniciar Simulación');
  };

  const toggleInstrucciones = () => {
    setMostrarInstrucciones(!mostrarInstrucciones);
  };

  const DirigirCableadoActivo = () => {
    cambiarTextoBoton();
    toggleInstrucciones();
  };

    const handleClickSerial = () => {
        Swal.fire('Cable serial seleccionado','','warning');
        setLineColor('red'); // Establecer el color de las líneas
      };
    
    const handleClickEthernet = () => {
        Swal.fire('Cable ethernet seleccionado','','warning');
        setLineColor('green'); // Establecer el color de las líneas
    };

    const handleClickConsola = () => {
        Swal.fire('Cable consola seleccionado','','warning');
        setLineColor('blue'); // Establecer el color de las líneas
    };

    const RegresarHomePage = () => {
      window.location.href = "./home_page";
  };


  return (
    <div>
      <BarraSuperior titulo="Simulador de Cableado" />
      <div className="d-flex justify-content-between align-items-center">
        {mostrarInstrucciones ? (
          <p style={{ marginLeft: '10px' }}>
            Instrucciones:<br />
            1. Seleccionar el cable<br />
            2. Seleccionar el dispositivo donde conectar el cable<br />
            3. Elegir el puerto a conectar de inicio y puerto final
          </p>
        ) : (
          <p style={{marginLeft: '10px'}}>Desafio:<br />
                       1.Conectar cable consola a router cisco 1 a puerto consola del router cisco<br />
                       2.Conectar cable ethernet a puerto ethernet 1 de PC con router cisco 1 a puerto g0/1<br />
                       3.Conectar cable serial a puerto serial s0/1 de cisco 1 con puerto serial s0/0 de cisco 2</p>
        )}
        <Button color="primary" onClick={DirigirCableadoActivo}>
          {textoBoton}
        </Button>
      </div>
      <div>
      <Button color="primary" onClick={RegresarHomePage}>
          Volver al Menu
        </Button>

      </div>

      
      <CanvasComponent lineColor={lineColor}/>
    
      <BotonTipoCable onClick={handleClickSerial} left={30} transform={-100} imagenSrc={imagen_cable_serial} color={'red'} borderColor="red"></BotonTipoCable>
      <BotonTipoCable onClick={handleClickEthernet} left={50} transform={-100} imagenSrc={imagen_cable_ethernet} color = {'green'} borderColor="green"></BotonTipoCable>
      <BotonTipoCable onClick={handleClickConsola} left={70} transform={-100} imagenSrc={imagen_cable_consola} color = {'blue'} borderColor="blue"></BotonTipoCable>
     
    </div>  
  );
}

export default Simulacion_cableado
