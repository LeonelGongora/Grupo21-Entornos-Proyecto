import React, { useState } from 'react';
import Modal from 'react-modal';
import imagen_router_cisco from '../images/imagen_router_cisco.jpg';
import imagen_computadora from '../images/imagen_computadora.jpg';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    height: '50vh', 
  },
  image: {
    margin: '0 10px', 
    maxWidth: '30%', 
    maxHeight: '50vh', 
    marginTop: '20px',
    cursor: 'pointer', 
  },
  modalContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    padding: '20px'
  },
};

const ImagenesCentradas = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div style={styles.container}>
    <img
      src={imagen_router_cisco}
      alt="Imagen 1"
      style={styles.image}
      onClick={() => openModal(imagen_router_cisco)}
    />
    <img
      src={imagen_computadora}
      alt="Imagen 2"
      style={styles.image}
      onClick={() => openModal(imagen_computadora)}
    />
    <img
      src={imagen_router_cisco}
      alt="Imagen 3"
      style={styles.image}
      onClick={() => openModal(imagen_router_cisco)}
    />
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Imagen Modal"
    >
      <img src={selectedImage} alt="Imagen" />
      <button onClick={closeModal}>Cerrar modal</button>
    </Modal>
  </div>
);
};

export default ImagenesCentradas;