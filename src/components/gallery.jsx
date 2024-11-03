import { Image } from "./image";

export const Gallery = (props) => {


  // Array de textos específicos para cada botón
  const buttonTexts = [
    "Contacta Un Asesor",
    "Agenda Una Recoleccion",
    "Asesoria De Embalaje",
    "Solicita Tu Documentacion",
    "Solicita Informacion ",
    "Solicita Comprobantes"
  ];

  const phonesNumbers = [
    "+573125602484",
    "+573219892602",
  ]
  
   

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
                >
                  <Image 
                    title={d.title} 
                    smallImage={d.smallImage} 
                  buttonText={buttonTexts[i] || "Contactar"} 
                  phoneNumber={phonesNumbers[i % phonesNumbers.length] }
                  message={"¡Hola quiero realizar un envio internacional!"}
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
