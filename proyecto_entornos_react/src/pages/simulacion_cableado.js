
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

  const desafioSerialesEnLinea = [{opcion1: 'Conectar Serial 1 de Cisco 1 a Serial 1 de Cisco 2'},
                                  {opcion2: 'Conectar Serial 2 de Cisco 1 a Serial 2 de Cisco 2'}];

  const desafioSerialesEnCruz = [{opcion1: 'Conectar Serial 1 de Cisco 1 a Serial 2 de Cisco 2'},
                                 {opcion2: 'Conectar Serial 2 de Cisco 1 a Serial 1 de Cisco 2'}];

  const desafioEthernetsEnLinea = [{opcion1: 'Conectar Ethernet 1 de Cisco 1 a Ethernet 1 de Cisco 2'},
                                   {opcion2: 'Conectar Ethernet 2 de Cisco 1 a Ethernet 2 de Cisco 2'}];
  
  const desafioEthernetsEnCruz = [{opcion1: 'Conectar Ethernet 1 de Cisco 1 a Ethernet 2 de Cisco 2'},
                                  {opcion2: 'Conectar Ethernet 2 de Cisco 1 a Ethernet 1 de Cisco 2'}];
  
  const desafioConsola = [{opcion1: 'Conectar Consola 1 de Cisco 1 a USB de PC'},
                          {opcion2: 'Conectar Consola 2 de Cisco 2 a USB de PC'}];
  
  const generarDesafioAleatorioSeriales = () => {
    const numeroDeEscogidos = Math.floor(Math.random() * 2); // Esto generará 0 o 1
    let opcionAleatoriaSerial = null;
    let opcionSerial1;
    let opcionSerial2;

    console.log(numeroDeEscogidos);
    if(numeroDeEscogidos === 0){
        // Si randomIndex es 0, escoge la opción1; si es 1, escoge la opción2
        const randomSerial = Math.floor(Math.random() * 2);
        const randomIndex = Math.floor(Math.random() * 2);
        console.log(randomSerial);
        console.log(randomIndex);
        if(randomSerial === 0){
           opcionAleatoriaSerial = randomIndex === 0 ? desafioSerialesEnLinea[0].opcion1 : desafioSerialesEnLinea[1].opcion2;
        }
        else{
           opcionAleatoriaSerial = randomIndex === 0 ? desafioSerialesEnCruz[0].opcion1 : desafioSerialesEnCruz[1].opcion2;
        }
    }
    else{
      const randomSerial = Math.floor(Math.random() * 2);
      if(randomSerial === 0){
          opcionSerial1 = desafioSerialesEnLinea[0].opcion1;
          opcionSerial2 = desafioSerialesEnLinea[1].opcion2;
      }
      else{
        opcionSerial1 = desafioSerialesEnCruz[0].opcion1
        opcionSerial2 = desafioSerialesEnCruz[1].opcion2;
      }
    }
    console.log(opcionSerial1);
    console.log(opcionSerial2);

    if(opcionAleatoriaSerial === null){
      return (
        <>
            {opcionSerial1}
          <br />
            {opcionSerial2}
        </>
      ); 
    }
    else{
      return opcionAleatoriaSerial;
    }
};

const generarDesafioAleatorioEthernets = () => {
  const numeroDeEscogidos = Math.floor(Math.random() * 2); // Esto generará 0 o 1
  let opcionAleatoriaEthernet = null;
  let opcionEthernet1;
  let opcionEthernet2;

  console.log(numeroDeEscogidos);
  if(numeroDeEscogidos === 0){
      // Si randomIndex es 0, escoge la opción1; si es 1, escoge la opción2
      const randomEthernet = Math.floor(Math.random() * 2);
      const randomIndex = Math.floor(Math.random() * 2);
      console.log(randomEthernet);
      console.log(randomIndex);
      if(randomEthernet === 0){
         opcionAleatoriaEthernet = randomIndex === 0 ? desafioEthernetsEnLinea[0].opcion1 : desafioEthernetsEnLinea[1].opcion2;
      }
      else{
         opcionAleatoriaEthernet = randomIndex === 0 ? desafioEthernetsEnCruz[0].opcion1 : desafioEthernetsEnCruz[1].opcion2;
      }
  }
  else{
    const randomEthernet = Math.floor(Math.random() * 2);
    if(randomEthernet === 0){
        opcionEthernet1 = desafioEthernetsEnLinea[0].opcion1;
        opcionEthernet2 = desafioEthernetsEnLinea[1].opcion2;
    }
    else{
      opcionEthernet1 = desafioEthernetsEnCruz[0].opcion1
      opcionEthernet2 = desafioEthernetsEnCruz[1].opcion2;
    }
  }
  console.log(opcionEthernet1);
  console.log(opcionEthernet2);

  if(opcionAleatoriaEthernet === null){
    return (
      <>
          {opcionEthernet1}
        <br />
          {opcionEthernet2}
      </>
    ); 
  }
  else{
    return opcionAleatoriaEthernet;
  }
};

const generarDesafioConsola = () => {
   const randomIndex = Math.floor(Math.random() * 2);
   return randomIndex === 0 ? desafioConsola[0].opcion1 : desafioConsola[1].opcion2;
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
                {generarDesafioAleatorioSeriales()}
                <br/>
                {generarDesafioAleatorioEthernets()}
                <br/>
                {generarDesafioConsola()}
           </p>
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
