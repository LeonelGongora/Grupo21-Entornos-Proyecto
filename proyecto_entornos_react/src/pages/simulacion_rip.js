import React, {useState, useEffect} from  'react';
import ModalCisco1 from "../modals/modal_cisco_1";
import Button from 'react-bootstrap/Button';

function SimulacionRip() {

    const [values, setValues] = useState({
        estado_modal_1 : false
    });

    const cambiarEstadoModal = (nuevoEstado) => {
        setValues({
            estado_modal_1:nuevoEstado,
        });
    };
  
  return (
    <>
      <ModalCisco1
        estado1={values.estado_modal_1}
        cambiarEstado1={cambiarEstadoModal}
      />
      <p>dsd</p>
      <Button variant="primary" onClick={() => cambiarEstadoModal(!values.estado_modal_1)}>Mostrar Configuracion</Button>{' '}
    </>
  );
}

export default SimulacionRip;