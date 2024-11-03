
export const Image = ({ title, smallImage, buttonText, phoneNumber, message}) => {

  
  const redirectWhatsApp = () => {

    const encodeMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;
    window.open(whatsappUrl, "_blank");
  };



  return (
    <div className="gallery-item">
      <div title={title} data-lightbox-gallery="gallery1">
        <img src={smallImage} alt={title} />
      </div>
      <div className="text-container">
        <div className="texto-Imagenes">{title}</div>
        <button className="contact-button blink-button" onClick={redirectWhatsApp}>{ buttonText}</button>
      </div>
    </div>
  );
};
