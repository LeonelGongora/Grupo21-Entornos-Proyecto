import React from 'react';
import {
  MDBBtn
} from "mdb-react-ui-kit";
import BarraSuperior from '../components/BarraSuperior';
import BotonTipoCable from '../components/BotonTipoCable';
import imagen_cable_serial from '../images/imagen_cable_serial.jpg';
import imagen_cable_ethernet from '../images/imagen_cable_ethernet.jpg';
import imagen_cable_consola from '../images/imagen_cable_consola.jpg';
import ImagenesCentradas from '../components/ImagenesCentradas';
import Button from 'react-bootstrap/Button';
function Simulacion_cableado(props) {

    const handleClickSerial = () => {
        alert('Seleccionado cable serial');
      };
    
    const handleClickEthernet = () => {
        alert('Seleccionado cable ethernet');
    };

    const handleClickConsola = () => {
        alert('Seleccionado cable consola');
    };

    const DirigirCableadoActivo = () => {
      window.location.href = "./simulacion_activo";

    };

  return (
    <div>
      <BarraSuperior titulo="Simulador de Cableado" />
      <div class="d-flex justify-content-between align-items-center">
        <p style={{marginLeft: '10px'}}>Instrucciones:<br />
                       1.Seleccionar el cable<br />
                       2.Seleccionar el dispositivo donde conectar el cable<br />
                       3.Elegir el puerto a conectar de inicio y puerto final</p>
        <Button color="primary" onClick={DirigirCableadoActivo}>
            Iniciar Simulación
        </Button>
      </div>
      <ImagenesCentradas></ImagenesCentradas>
      <BotonTipoCable onClick={handleClickSerial} left={30} transform={-100} imagenSrc={imagen_cable_serial}></BotonTipoCable>
      <BotonTipoCable onClick={handleClickEthernet} left={60} transform={-100} imagenSrc={imagen_cable_ethernet}></BotonTipoCable>
      <BotonTipoCable onClick={handleClickConsola} left={90} transform={-100} imagenSrc={imagen_cable_consola}></BotonTipoCable>
     
    </div>  
  );
}

export default Simulacion_cableado
