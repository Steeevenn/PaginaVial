import { Image } from "./image";
import { useState, useEffect } from "react";

export const Gallery = (props) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  // Array de textos específicos para cada botón
  const buttonTexts = [
    "Contacta Un Asesor",
    "Agenda Una Recoleccion",
    "Asesoria De Embalaje",
    "Solicita Tu Documentacion",
    "Solicita Informacion De Tu Envio",
    "Solicita Comprobantes"
  ];

  useEffect(() => {
    if (props.data) {
      // Configurar un intervalo para mostrar cada elemento con un retraso
      const interval = setInterval(() => {
        setVisibleItems((prev) => {
          if (prev.length < props.data.length) {
            return [...prev, prev.length];
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 300);
    }

    const galleryItems = document.querySelectorAll('.hover-bg');

    // Listener para manejar el toque
    const handleTouchStart = (event) => {
      const currentIndex = [...galleryItems].indexOf(event.currentTarget);
      setActiveItem((prev) => (prev === currentIndex ? null : currentIndex));
    };

    // Agregar el listener solo una vez al montar el componente
    galleryItems.forEach((item) => {
      item.addEventListener('touchstart', handleTouchStart);
    });

    // Cerrar tarjeta activa al hacer clic fuera
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.hover-bg')) {
        setActiveItem(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    // Limpieza de los listeners al desmontar el componente
    return () => {
      galleryItems.forEach((item) => {
        item.removeEventListener('touchstart', handleTouchStart);
      });
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [props.data]);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Proceso de envío</h2>
        </div>
        <div className="gallery-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className={`hover-bg ${visibleItems.includes(i) ? "fade-in" : "hidden"} ${
                    activeItem === i ? "active" : ""
                  }`}
                >
                  <Image 
                    title={d.title} 
                    smallImage={d.smallImage} 
                    buttonText={buttonTexts[i] || "Contactar"} 
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
