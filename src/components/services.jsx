import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // Recomiendo usar GSAP para animaciones más suaves

const Services = ({ data }) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Animación cuando el elemento entra en vista
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              {
                opacity: 0,
                y:150
              },
              {
                ease: "power2.out",
                opacity: 2,
                y: 0,
                duration: 2,
                
              }
            );
          } else {
            // Resetear la animación cuando el elemento sale de vista
            gsap.set(entry.target, {
              opacity: 0,
              y: 50
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    // Observar todos los elementos
    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Limpiar el observer
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [data]);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
        </div>
        <div className="row">
          {data ? (
            data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="col-md-4"
                ref={(el) => (elementsRef.current[i] = el)}
              >
                <i className={`service-icon ${d.icon}`}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
          ) : (
            "loading"
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;