import React from 'react';

const PaymentMethodsSection = () => {
  const paymentMethods = [
    {
      id: 1,
      title: "Tarjetas de Crédito/Débito",
      description: "Visa, MasterCard, American Express",
      icon: "fa-solid fa-credit-card",
      advantages: ["Pago instantáneo", "Proceso seguro", "Sin comisiones adicionales"]
    },
    {
      id: 2,
      title: "Billeteras Digitales",
      description: "Nequi, Daviplata, Pagos Internacionales",
      icon: "fa-solid fa-wallet",
      advantages: ["Rápido y conveniente", "Protección al comprador", "Múltiples opciones"]
    },
    {
      id: 3,
      title: "Transferencia Bancaria",
      description: "Transferencia directa a nuestra cuenta",
      icon: "fa-solid fa-building-columns",
      advantages: ["Sin límites de monto", "Proceso verificable", "Seguro para grandes pagos"]
    },
    {
      id: 4,
      title: "Pago en Efectivo",
      description: "Pago directo a nuestros agentes",
      icon: "fa-solid fa-money-bill-wave",
      advantages: ["No requiere cuenta bancaria", "Sin comisiones"]
    }
  ];

  return (
    <div id="metodos-pago" className="payment-methods-section ">
      <h2 className="section-title">Métodos de Pago</h2>
      <p className="section-description">
        Ofrecemos múltiples opciones de pago seguras para tu conveniencia
      </p>
      
      <div className="container">
        <div className="row">
          {paymentMethods.map((method) => (
            <div key={method.id} className="col-12 col-md-6 col-lg-3">
              <div className="payment-card">
                <div className="card-content">
                  <div className="card-icon">
                    <i className={method.icon}></i>
                  </div>
                  <h3 className="card-title">{method.title}</h3>
                  <p className="card-description">{method.description}</p>
                  <ul className="advantages-list">
                    {method.advantages.map((advantage, index) => (
                      <li key={index} className="advantage-item">
                        <i className="fa-solid fa-circle-check advantage-icon"></i>
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="security-section">
        <div className="security-icons">
          <i className="fa-solid fa-shield-halved security-icon shield"></i>
          <i className="fa-solid fa-lock security-icon lock"></i>
        </div>
        <p className="security-text">
          Todos nuestros métodos de pago están protegidos con la más alta seguridad
        </p>
      </div>
    </div>
  );
};

export default PaymentMethodsSection;