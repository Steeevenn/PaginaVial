import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
         <img className="imagen-logo-navbar" src="/img/LogoVial.jpeg" alt="Logovial"></img>

        <a className="navbar-brand page-scroll" href="#page-top">
          VIAL LOGISTIC
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#features" className="nav-link page-scroll">
                Por que Vial
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link page-scroll">
                Sobre VIAL
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link page-scroll">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link page-scroll">
                Procesos
              </a>
            </li>
            <li className="nav-item">
              <a href="#metodos-pago" className="nav-link page-scroll">
                Metodos De Pago
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link page-scroll">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
