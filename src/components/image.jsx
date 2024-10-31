import React from "react";

export const Image = ({ title, smallImage }) => {
  return (
    <div className="gallery-item">
      <a title={title} data-lightbox-gallery="gallery1">
        <img src={smallImage} alt={title} />
      </a>
      <div className="text-container">
        <div className="texto-Imagenes">{title}</div>
          <button className="contact-button">Contactar</button>


      </div>
    </div>
  );
};
