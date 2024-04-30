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
    { nombreEntrada: 'Serial 1', src: entradaSerialCisco1, x: 50, y: 250, action: 'entradaSerialCisco1'  },
    { nombreEntrada: 'Serial 2', src: entradaSerialCisco11, x: 150, y: 250, action: 'entradaSerialCisco11'  },
    { nombreEntrada: 'Ethernet 1', src: entradaEthernetCisco1, x: 250, y: 250, action: 'entradaEthernetCisco1'  },
    { nombreEntrada: 'Ethernet 2', src: entradaEthernetCisco11, x: 350, y: 250, action: 'entradaEthernetCisco11'  },
    { nombreEntrada: 'Consola', src: entradaConsolaCisco1, x: 450, y: 250, action: 'entradaConsolaCisco1' },
    { nombreEntrada: 'USB', src: entradaUsbPC, x: 600, y: 70, action: 'entradaUsbPC'  },
    { nombreEntrada: 'Ethernet', src: entradaEthernetPC, x: 700, y: 70, action: 'entradaEthernetPC'  },
    { nombreEntrada: 'Serial 1', src: entradaSerialCisco2, x: 850, y: 250, action: 'entradaSerialCisco2'  },
    { nombreEntrada: 'Serial 1', src: entradaSerialCisco21, x: 950, y: 250, action: 'entradaSerialCisco21'  },
    { nombreEntrada: 'Ethernet 1', src: entradaEthernetCisco2, x: 1050, y: 250, action: 'entradaEthernetCisco2'  },
    { nombreEntrada: 'Ethernet 2',src: entradaEthernetCisco21, x: 1150, y: 250, action: 'entradaEthernetCisco21'  },
    { nombreEntrada: 'Consola', src: entradaConsolaCisco2, x: 1250, y: 250, action: 'entradaConsolaCisco2'  }
  ];
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imageSize = 80;

    setTimeout(() => {
      ctx.font = '20px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText('Cisco 1', 250, 200);
      ctx.fillText('PC', 650, 30);
      ctx.fillText('Cisco 2', 1050, 200);
    }, 10);

    images.forEach(imageData => {
      const img = new Image();
      img.src = imageData.src;
      img.onload = () => {
 
        ctx.drawImage(img, imageData.x, imageData.y,  imageSize, imageSize);
        ctx.font = '20px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(imageData.nombreEntrada, imageData.x, imageData.y+120);
      };
    });

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

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
        }
    }
    console.log('imagenes clickeadas',clickedImages);
  }
  /** 
     
       if(existeEnPulsados){
          setLastTwoClickedImages(lastTwo);
          console.log('Last Two Clicked Images:', lastTwo);
          setClickedImages(prevClickedImages => prevClickedImages.slice(0, -2));
          console.log('¿El par ya existe en pulsados?', existeEnPulsados);
        } 
      }
      if(!existeParValido){
            setLastTwoClickedImages(lastTwo);
            console.log('Last Two Clicked Images:', lastTwo);
            setClickedImages(prevClickedImages => prevClickedImages.slice(0, -2));
            console.log('¿El par existe en pares válidos?', existeParValido);
      }**/
  }, [clickedImages]);


  return (
    <canvas ref={canvasRef} width={1500} height={400} />
  );
}
export default CanvasComponent;
