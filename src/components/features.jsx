import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FeatureItem = ({ icon, title, text }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(entry.target,
            {
              opacity: 0,
              y: 100,
              scale: 2,
             },
            
            {
            opacity: 2, 
            y: 0, 
            scale: 1, 
            duration: 2, 
            ease: "back.out(1.8)"  }
          );
        }
      });
    });

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current);
      }
    };
  }, []);

  return (
    <div className="col-xs-6 col-md-3">
      <i ref={iconRef} className={icon}></i>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 mt-10 mx-auto section-title">
          <h2 className="custom-text">¿Por qué realizar tus envíos con Vial Logistic?</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <FeatureItem
                  key={`${d.title}-${i}`}
                  icon={d.icon}
                  title={d.title}
                  text={d.text}
                />
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};