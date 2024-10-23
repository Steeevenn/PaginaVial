import { Image } from "./image";
import { useState, useEffect } from "react";

export const Gallery = (props) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (props.data) {
      // Mostrar cada item con un retraso
      props.data.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, index]);
        }, index * 300);
      });
    }
  
    const galleryItems = document.querySelectorAll('.hover-bg');

    galleryItems.forEach(item => {

      item.addEventListener('touchStart', function () {

        const currentIndex = [...galleryItems].indexOf(this);
        if (activeItem === currentIndex) {
          setActiveItem(null);
        } else {
          setActiveItem(currentIndex);
        }
      });
    });


    const handleOutSideClick = (event) => { 

      if (!event.target.closest('.hover-bg')) { 
        setActiveItem(null);
      }

    }

      document.addEventListener('click', handleOutSideClick);

    // Limpieza de los listeners al desmontar el componente
    return () => {
      galleryItems.forEach(item => {
        item.removeEventListener('touchstart', () => {});
      });
      document.removeEventListener('click', handleOutSideClick);
    };
  }, [props.data, activeItem]);


  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Proceso de envio</h2>
        </div>
        <div className="gallery-grid">
          {props.data
            ? props.data.map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                className={`gallery-item hover-bg ${visibleItems.includes(i) ? "fade-in" : "hidden"
                  }${activeItem === i ? "active" : ""}`}
                >
                  <Image title={d.title} smallImage={d.smallImage} />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};