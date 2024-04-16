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

function Simulacion_activo() {

    const handleClickSerial = () => {
        alert('Seleccionado cable serial');
      };
    
    const handleClickEthernet = () => {
        alert('Seleccionado cable ethernet');
    };

    const handleClickConsola = () => {
        alert('Seleccionado cable consola');
    };
    
    const DirigirCableado = () => {
      window.location.href = "./simulacion_cableado";

    };

  return (
    <div>
      <BarraSuperior titulo="Simulador de Cableado" />
      <div class="d-flex justify-content-between align-items-center">
        <p style={{marginLeft: '10px'}}>Desafio:<br />
                       1.Conectar cable consola a router cisco 1 a puerto consola del router cisco<br />
                       2.Conectar cable ethernet a puerto ethernet 1 de PC con router cisco 1 a puerto g0/1<br />
                       3.Conectar cable serial a puerto serial s0/1 de cisco 1 con puerto serial s0/0 de cisco 2</p>
        <MDBBtn color="primary" onClick={DirigirCableado}>
            Atras
        </MDBBtn>
      </div>
      <ImagenesCentradas></ImagenesCentradas>
      <BotonTipoCable onClick={handleClickSerial} left={30} transform={-100} imagenSrc={imagen_cable_serial}></BotonTipoCable>
      <BotonTipoCable onClick={handleClickEthernet} left={60} transform={-100} imagenSrc={imagen_cable_ethernet}></BotonTipoCable>
      <BotonTipoCable onClick={handleClickConsola} left={90} transform={-100} imagenSrc={imagen_cable_consola}></BotonTipoCable>
     
    </div>  
  );
}

export default Simulacion_activo
