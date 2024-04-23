import React, { useState } from 'react';
import entradaConsola from '../images/entradaConsola.png';
import entradaEthernet from '../images/entradaEthernet.png';
import entradaSerial from '../images/entradaSerial.png';
import entradaUsb from '../images/entradaUsb.png'



const ImagenesCentradas = () => {


  const styles = {
    smallImage: {
      width: '70px',
      height: '70px',
      margin: '5px', // Ajusta según necesites
    },
  };
  const handleClick = (tipoEntrada) => {
    let mensaje;
    switch (tipoEntrada) {
      case 'entradaSerial':
        mensaje = 'Se ha seleccionado una entrada serial.';
        break;
      case 'entradaEthernet':
        mensaje = 'Se ha seleccionado una entrada ethernet.';
        break;
      case 'entradaConsola':
        mensaje = 'Se ha seleccionado una entrada consola.';
        break;
      case 'entradaUsb':
          mensaje = 'Se ha seleccionado una entrada usb.';
          break;
      default:
        mensaje = 'Tipo de entrada no reconocido.';
        break;
    }
    alert(mensaje);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50vh', margin: '0 100px' }}>
    <div>
      <div>
        <h2>Router Cisco 1</h2>
        <button style={styles.buttonImage} onClick={() => handleClick('entradaSerial')}>
          <img src={entradaSerial} alt="Imagen 1" style={styles.smallImage} />
          <p>Serial</p>
        </button>
        <button style={styles.buttonImage} onClick={() => handleClick('entradaSerial')}>
          <img src={entradaSerial} alt="Otra Imagen" style={styles.smallImage} />
          <p>Serial</p>
        </button>
  
      </div>
      <div>
        <button style={styles.buttonImage} onClick={() => handleClick('entradaEthernet')}>
          <img src={entradaEthernet} alt="Una Más" style={styles.smallImage} />
          <p>Ehernet</p>
        </button>
        <button style={styles.buttonImage} onClick={() => handleClick('entradaEthernet')}>
          <img src={entradaEthernet} alt="Una Más" style={styles.smallImage} />
          <p>Ehernet</p>
        </button>
        <button style={styles.buttonImage} onClick={() => handleClick('entradaConsola')}>
          <img src={entradaConsola} alt="Una Más" style={styles.smallImage} />
          <p>Console</p>
        </button>
      </div>
    </div>
    <div style={{ alignSelf: 'flex-start' }}>
      <h2>PC</h2>
      <div>
        <button style={styles.buttonImage} onClick={() => handleClick('entradaUsb')}>
          <img src={entradaUsb} alt="Imagen 1" style={styles.smallImage} />
          <p>USB</p>
        </button>
        <button style={styles.buttonImage} onClick={() => handleClick('entradaEthernet')}>
          <img src={entradaEthernet} alt="Una Más" style={styles.smallImage} />
          <p>Ehernet</p>
        </button>
      </div>
    </div>
    <div>
      <h2>Router Cisco 2</h2>
      <div>
        <button style={styles.buttonImage} onClick={() => handleClick('entradaSerial')}>
          <img src={entradaSerial} alt="Imagen 1" style={styles.smallImage} />
          <p>Serial</p>
        </button>
        <button style={styles.buttonImage} onClick={() => handleClick('entradaSerial')}>
          <img src={entradaSerial} alt="Otra Imagen" style={styles.smallImage} />
          <p>Serial</p>
        </button>
      </div>
      <div>
        <button style={styles.buttonImage} onClick={() => handleClick('entradaEthernet')}>
          <img src={entradaEthernet} alt="Una Más" style={styles.smallImage} />
          <p>Ehernet</p>
        </button>
        <button style={styles.buttonImage} onClick={() => handleClick('entradaEthernet')}>
          <img src={entradaEthernet} alt="Una Más" style={styles.smallImage} />
          <p>Ehernet</p>
        </button>
        <button style={styles.buttonImage} onClick={() => handleClick('entradaConsola')}>
          <img src={entradaConsola} alt="Una Más" style={styles.smallImage} />
          <p>Console</p>
        </button>
      </div>
    </div>
  </div>
);
};

export default ImagenesCentradas;