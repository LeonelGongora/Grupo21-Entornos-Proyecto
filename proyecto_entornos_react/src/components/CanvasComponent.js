import React, { useRef, useEffect, useState} from 'react';
import entradaConsolaCisco1 from '../images/entradaConsola.png'; 
import entradaEthernetCisco1 from '../images/entradaEthernet.png';
import entradaEthernetCisco11 from '../images/entradaEthernet.png';
import entradaSerialCisco1 from '../images/entradaSerial.png';
import entradaSerialCisco11 from '../images/entradaSerial.png';
import entradaUsbPC from '../images/entradaUsb.png';
import entradaEthernetPC from '../images/entradaEthernet.png';
import entradaConsolaCisco2 from '../images/entradaConsola.png'; 
import entradaEthernetCisco2 from '../images/entradaEthernet.png';
import entradaEthernetCisco21 from '../images/entradaEthernet.png';
import entradaSerialCisco2 from '../images/entradaSerial.png';
import entradaSerialCisco21 from '../images/entradaSerial.png';

function CanvasComponent() {
  const images = [
    { nombreEntrada: 'Serial 1', src: entradaSerialCisco1, x: 150, y: 50, action: 'entradaSerialCisco1'  },
    { nombreEntrada: 'Serial 2', src: entradaSerialCisco11, x: 150, y: 175, action: 'entradaSerialCisco11'  },
    { nombreEntrada: 'Ethernet 1', src: entradaEthernetCisco1, x: 150, y: 300, action: 'entradaEthernetCisco1'  },
    { nombreEntrada: 'Ethernet 2', src: entradaEthernetCisco11, x: 150, y: 425, action: 'entradaEthernetCisco11'  },
    { nombreEntrada: 'Consola', src: entradaConsolaCisco1, x: 150, y: 550, action: 'entradaConsolaCisco1' },
    { nombreEntrada: 'USB', src: entradaUsbPC, x: 600, y: 50, action: 'entradaUsbPC'  },
    { nombreEntrada: 'Ethernet', src: entradaEthernetPC, x: 700, y: 50, action: 'entradaEthernetPC'  },
    { nombreEntrada: 'Serial 1', src: entradaSerialCisco2, x: 1150, y: 50, action: 'entradaSerialCisco2'  },
    { nombreEntrada: 'Serial 1', src: entradaSerialCisco21, x: 1150, y: 175, action: 'entradaSerialCisco21'  },
    { nombreEntrada: 'Ethernet 1', src: entradaEthernetCisco2, x: 1150, y: 300, action: 'entradaEthernetCisco2'  },
    { nombreEntrada: 'Ethernet 2',src: entradaEthernetCisco21, x: 1150, y: 425, action: 'entradaEthernetCisco21'  },
    { nombreEntrada: 'Consola', src: entradaConsolaCisco2, x: 1150, y: 550, action: 'entradaConsolaCisco2'  }
  ];
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imageSize = 80;

    setTimeout(() => {
      ctx.font = '20px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText('Cisco 1', 50, 325);
      ctx.fillText('PC', 650, 30);
      ctx.fillText('Cisco 2', 1300, 325);
    }, 10);

    images.forEach(imageData => {
      const img = new Image();
      img.src = imageData.src;
      img.onload = () => {
 
        ctx.drawImage(img, imageData.x, imageData.y,  imageSize, imageSize);
        ctx.font = '20px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(imageData.nombreEntrada, imageData.x, imageData.y+110);
      };
    });

    ctx.fillStyle = '#FFFFFF';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener('click', handleClick);

    return () => {
      canvas.removeEventListener('click', handleClick);
    };
  }, [images]);
  

  const [clickedImages, setClickedImages] = useState([]); 


  const canvasRef = useRef(null);
  const [firstClickedImage, setFirstClickedImage] = useState(null); // Estado para almacenar la primera imagen pulsada

  function handleClick(event) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const imageSize = 80; 

    images.forEach(imageData => {
      if (x >= imageData.x && x <= imageData.x + imageSize &&
          y >= imageData.y && y <= imageData.y + imageSize) {
        if (firstClickedImage) {
          setClickedImages(prevState => [
            ...prevState,
            {action1: firstClickedImage.action, x1:firstClickedImage.x, y1: firstClickedImage.y, action2: imageData.action, x2:imageData.x, y2: imageData.y}
          ]);
          setFirstClickedImage(null); 
        } else {
          setFirstClickedImage(imageData);
        }
        // Realizar acciones correspondientes al hacer clic en la imagen aquí
      }
    });
  }
    

  const paresValidos = [
     {action1: 'entradaSerialCisco1',action2:'entradaSerialCisco2'},
     {action1: 'entradaSerialCisco1',action2:'entradaSerialCisco21'},
     {action1: 'entradaSerialCisco11',action2:'entradaSerialCisco2'},
     {action1: 'entradaSerialCisco11',action2:'entradaSerialCisco21'},

     {action1: 'entradaEthernetCisco1',action2:'entradaEthernetCisco2'},
     {action1: 'entradaEthernetCisco1',action2:'entradaEthernetCisco21'},
     {action1: 'entradaEthernetCisco11',action2:'entradaEthernetCisco2'},
     {action1: 'entradaEthernetCisco11',action2:'entradaEthernetCisco21'},

     {action1: 'entradaUsbPC',action2:'entradaConsolaCisco1'},
     {action1: 'entradaUsbPC',action2:'entradaConsolaCisco2'}
  ];
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Función para dibujar las líneas en el canvas
    function drawLines() {
      
      //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas antes de dibujar nuevas líneas

      ctx.strokeStyle = 'red'; // Color de las líneas
      ctx.lineWidth = 5; // Grosor de las líneas
      
      clickedImages.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x1+40, line.y1+40); // Punto inicial de la línea
        ctx.lineTo(line.x2+40, line.y2+40); // Punto final de la línea
        ctx.stroke(); // Dibujar la línea
      });
    }

    // Llamar a la función drawLines al montar el componente y cada vez que linesData cambie
    drawLines();

  }, [clickedImages]);


  useEffect(() => {
    const lastTwo = clickedImages.pop();
    if (lastTwo) {
      const existeParValido = paresValidos.some(par => {
        return (par.action1 === lastTwo.action1 && par.action2 === lastTwo.action2) || 
               (par.action2 === lastTwo.action1 && par.action1 === lastTwo.action2);
      });
      if(existeParValido){
        const existeEnPulsados = clickedImages.some(par => {
          return (par.action1 === lastTwo.action1 && par.action2 === lastTwo.action2) || 
                 (par.action2 === lastTwo.action1 && par.action1 === lastTwo.action2);
        });
        const existeEnCadenas = clickedImages.some(cadena => {
          return cadena.action1 === lastTwo.action1 || cadena.action2 === lastTwo.action1 ||
                 cadena.action1 === lastTwo.action2 || cadena.action2 === lastTwo.action2;
        });
        if(existeEnPulsados){
          alert('Ya se realizo esta conexion');
        }
        if(existeEnCadenas){
          alert('Este puerto esta en uso');
        }
        if(!existeEnPulsados && !existeEnCadenas){
          clickedImages.push(lastTwo);
          alert('Conexion realizada');
        }
    }
    console.log('imagenes clickeadas',clickedImages);
  }
  }, [clickedImages]);


  return (
    <canvas ref={canvasRef} width={1500} height={700} />
  );
}
export default CanvasComponent;
