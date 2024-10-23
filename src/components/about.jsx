import React, { useEffect, useState } from "react";

export const About = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkIfVisible = () => {
      const aboutImage = document.getElementById("imagen-about");
      if (!aboutImage) return;

      const rect = aboutImage.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Verifica si el elemento está en el viewport
      if (rect.top < windowHeight && rect.bottom >= 0 && !isVisible) {
        setIsVisible(true);
        window.removeEventListener("scroll", checkIfVisible);
      }
    };

    // Verificar visibilidad inicial
    checkIfVisible();
    
    // Asignar el evento scroll
    window.addEventListener("scroll", checkIfVisible);

    // Limpieza
    return () => {
      window.removeEventListener("scroll", checkIfVisible);
    };
  }, [isVisible]);

  return (
    <div id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xs-12 col-md-6">
            <div className="about-video">
              <h2>Acerca de Vial Logistic</h2>
              <video
                className="video-responsive"
                src="../videos/videoVial.mp4"
                loop
                muted
                controls
                autoPlay
              />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <div className="div-imagen-about">
                <img
                  id="imagen-about"
                  className="imagen-logo-about"
                  src="/img/LogoVial.jpeg"
                  alt="LogoVial"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 4s ease-in",
                  }}
                />
              </div>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Elementos permitidos y prohibidos al momento de realizar tu envío internacional:</h3>
              <div className="list-style">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12 about-text01">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};