import React from 'react';
import '../css/BotonTipoCable.css';

const BotonTipoCable = ({ onClick, left, transform, imagenSrc }) => {
    const buttonStyle = {
      backgroundImage: `url(${imagenSrc})`,
      position: 'fixed',
      bottom: '20px',
      left: `${left}%`,
      transform: `translateX(${transform}%)` 
    };
  
    return (
      <button onClick={onClick} className="botonCable" style={buttonStyle}></button>
    );
  };

export default BotonTipoCable;