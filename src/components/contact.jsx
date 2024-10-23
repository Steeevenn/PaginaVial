import { useState } from "react";
import emailjs from '@emailjs/browser'
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  name: "",
  email: "",
  message: "",
  telefono: "",  
};


export const Contact = (props) => {
  const [{ name, email, message, telefono }, setState] = useState(initialState);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message, telefono);

    emailjs
      .sendForm("service_s1rz2xg", "template_l8l4zbg", e.target, "JW85GpWlYLwUwu-KL")
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Mensaje enviado con exito!");
          clearState();

       
        },
        (error) => {
          console.log(error.text);
          toast.error("Error al enviar el mensaje!");
          clearState();
      
        }
      );
  };

  return (
    <div>
      <ToastContainer position="bottom-center"/>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h2>Contáctanos</h2>
                <p>Déjanos tus datos de contacto</p>
              </div>
              <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        className="form-control"
                        placeholder="Teléfono"
                        required
                        value={telefono}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar mensaje
                </button>
              </form>
            </div>
            <div className="col-lg-3 ms-lg-auto contact-info">
              <div className="contact-item">
                <h3>Información de Contacto</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Dirección
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Teléfono
                  </span>
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope"></i> Email
                  </span>
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="social">
                <ul>
                  <li>
                    <a  href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram fa-beat"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.tiktok : "/"}>
                      <i className="fab fa-tiktok fa-2x fa-beat"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook fa-beat fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 VialLogistic Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};
