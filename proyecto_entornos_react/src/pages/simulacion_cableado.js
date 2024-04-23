
import BarraSuperior from '../components/BarraSuperior';
import BotonTipoCable from '../components/BotonTipoCable';
import imagen_cable_serial from '../images/imagen_cable_serial.jpg';
import imagen_cable_ethernet from '../images/imagen_cable_ethernet.jpg';
import imagen_cable_consola from '../images/imagen_cable_consola.jpg';
import ImagenesCentradas from '../components/ImagenesCentradas';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function Simulacion_cableado(props) {

  const [mostrarInstrucciones, setMostrarInstrucciones] = useState(true);
  const [textoBoton, setTextoBoton] = useState('Iniciar Simulación');

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
        alert('Seleccionado cable serial');
      };
    
    const handleClickEthernet = () => {
        alert('Seleccionado cable ethernet');
    };

    const handleClickConsola = () => {
        alert('Seleccionado cable consola');
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
      <Button color="primary" onClick={RegresarHomePage}>
          Volver al Menu
        </Button>
      
      <ImagenesCentradas />
    
      <BotonTipoCable onClick={handleClickSerial} left={30} transform={-100} imagenSrc={imagen_cable_serial}></BotonTipoCable>
      <BotonTipoCable onClick={handleClickEthernet} left={60} transform={-100} imagenSrc={imagen_cable_ethernet}></BotonTipoCable>
      <BotonTipoCable onClick={handleClickConsola} left={90} transform={-100} imagenSrc={imagen_cable_consola}></BotonTipoCable>
     
    </div>  
  );
}

export default Simulacion_cableado
