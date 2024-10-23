/*import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

const ReviewCard = ({ reviews }) => {
  const animationSpeed = 3000; // Velocidad de la animación en milisegundos
  const wrapperRef = useRef(null);

  useEffect(() => {
    const container = $(wrapperRef.current);
    const totalWidth = container.children().length * (300 + 20); // Ancho de cada tarjeta + margen

    // Configuración inicial de CSS
    container.css({ width: totalWidth, display: 'flex' });

    // Función de animación
    function animate() {
      container.animate({ marginLeft: `-${300 + 20}px` }, animationSpeed, 'linear', function () {
        // Mueve la primera tarjeta al final
        container.append(container.children().first());
        container.css({ marginLeft: 0 });
        animate(); // Reinicia la animación
      });
    }

    animate(); // Inicia la animación

    return () => {
      container.stop(true); // Detiene las animaciones al desmontar
    };
  }, [reviews]);

  return (
    <div id="reseñas" className="review-section">
      <div className="reviews-header">
        <h2>RESEÑAS</h2>
        <span>5 de 5 estrellas</span>
        <div className="google-rating">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="fa fa-star" />
          ))}
        </div>
        <div>
          <img
            src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
            alt="Google"
            className="google-logo"
          />
        </div>
      </div>

      <div className="review-cards-container">
        <div className="review-cards-wrapper" ref={wrapperRef}>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <h4>{review.reviewerName}</h4>
                <span>{review.reviewDate}</span>
              </div>
              <div className="review-body">
                <p>{review.reviewText}</p>
              </div>
              <div className="review-footer">
                <div className="review-rating">
                  {Array(Math.max(0, Math.min(5, parseInt(review.rating) || 0)))
                    .fill()
                    .map((_, i) => (
                      <i key={i} className="fa fa-star" />
                    ))}
                  {Array(5 - Math.max(0, Math.min(5, parseInt(review.rating) || 0)))
                    .fill()
                    .map((_, i) => (
                      <i key={i} className="fa fa-star-o" />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
*/