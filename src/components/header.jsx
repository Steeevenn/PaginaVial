import React from "react";
import PayButton from "./buttonAnimated";

export const Header = (props) => {
  return (
    <header id="header">
      
      <div className="intro">
        
        <div className="overlay">

          <div className="container" >
            <div className="row justify-content-center">
              <div className="col-md-7 mt-10 intro-text text-center">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <div className="button-containeranimated">
                  <PayButton 
                    phoneNumber="573219892602"
                    message="Hola, estoy interesado en realizar un envío internacional"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

  