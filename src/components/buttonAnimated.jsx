import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Registrar el plugin de GSAP
gsap.registerPlugin(MotionPathPlugin);

const PayButton = ({ phoneNumber, message = "Hola estoy interesado en tu servicio" }) => {
  const buttonRef = useRef(null);

  const [isFeatureLimited, setIsFeatureLimited] = useState(false);

  useEffect(() => {
    // Verificación de características específicas
    const supportsCSSVariables = window.CSS && window.CSS.supports && window.CSS.supports('--fake-var', 0);
    const supportsPointerEvents = !!window.PointerEvent;
    const isLimited = !supportsCSSVariables || !supportsPointerEvents;

    setIsFeatureLimited(isLimited);
  }, []);

  useEffect(() => {
    if (!isFeatureLimited) {
      const button = buttonRef.current;

      const handlePointerDown = () => {
        if (button.classList.contains('animating')) return;
        gsap.to(button, { '--scale': 0.975, duration: 0.15 });
      };

      const handlePointerUp = () => {
        if (button.classList.contains('animating')) return;
        gsap.to(button, { '--scale': 1, duration: 0.15 });
      };

      const handlePointerLeave = () => {
        if (button.classList.contains('animating')) return;
        gsap.to(button, { '--scale': 1, duration: 0.15 });
      };

      const handleClick = (e) => {
        e.preventDefault();

        button.classList.add('animating');

        if (button.classList.contains('done')) {
          gsap.to(button, { '--success-o': 1, duration: 0.15 });
          gsap.to(button, {
            '--default-o': 1,
            duration: 0.15,
            clearProps: true,
            onComplete: () => {
              button.classList.remove('animating', 'done');
            },
          });
          return;
        }

        gsap.to(button, {
          '--rotate': '-90deg',
          '--y': '25px',
          '--default-o': 0,
          duration: 0.4,
        });

        gsap.to(button, {
          keyframes: [
            {
              '--light-opacity': 1,
              duration: 0.3,
              delay: 0.15,
              onComplete: () => {
                gsap.from(button.querySelectorAll('.icon'), {
                  stagger: 0.2,
                  opacity: 0,
                  duration: 0.15,
                });
                gsap.set(button.querySelectorAll('.icon'), {
                  x: gsap.utils.random(-100, -80),
                  y: gsap.utils.random(-80, -60),
                });
                gsap.to(button.querySelectorAll('.icon'), {
                  stagger: 0.2,
                  duration: 0.5,
                  motionPath: {
                    path: [
                      {
                        x: gsap.utils.random(-60, -40),
                        y: gsap.utils.random(-10, -30),
                      },
                      { x: 0, y: 0 },
                    ],
                    curviness: 0.5,
                  },
                  rotation: `-=${gsap.utils.random(-720, 720)}`,
                });
              },
            },
            { '--truck-y': '1px', duration: 0.1, delay: 0 },
            { '--truck-y': '0px', duration: 0.1 },
            // Otros keyframes...
          ],
          onComplete: () => {
            gsap.to(button, {
              keyframes: [
                { '--truck-base-x': '-4px', duration: 0.4 },
                { '--truck-base-x': '60px', duration: 1 },
                { '--truck-base-x': '20px', duration: 0.6 },
                { '--truck-base-x': '300px', duration: 0.4 },
              ],
              onComplete: () => {
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
                button.classList.add('done');
                button.classList.remove('animating');
                gsap.to(button, {
                  keyframes: [
                    { '--rotate': '0deg', '--y': '0px', duration: 0.2 },
                    { '--success-offset': '0px', '--success-o': 1, duration: 0.2 },
                  ],
                });
              },
            });
          },
        });
      };

      button.addEventListener('pointerdown', handlePointerDown);
      button.addEventListener('pointerup', handlePointerUp);
      button.addEventListener('pointerleave', handlePointerLeave);
      button.addEventListener('click', handleClick);

      return () => {
        button.removeEventListener('pointerdown', handlePointerDown);
        button.removeEventListener('pointerup', handlePointerUp);
        button.removeEventListener('pointerleave', handlePointerLeave);
        button.removeEventListener('click', handleClick);
      };
    }
  }, [isFeatureLimited]);

  if (isFeatureLimited) {
    return (
      <div className='pay-button' onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')}>
        ¡Agenda tu Recolección!
      </div>
    );
  }

    return (
        <div className="button-containeranimated">
    <button className="pay-button " ref={buttonRef}>
      <div className="default">¡Agenda tu Recoleccion!</div>
      <div className="success">
        <svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
        ¡Genial!
      </div>
      <div className="truck-wrapper">
        <div className="truck">
              <div className="front"></div>
              <div className="light"></div>
          <div className="back">
            <div className="shadow"></div>
      <svg width="19" height="22" viewBox="0 0 19 22" fillRule="none" xmlns="http://www.w3.org/2000/svg">
                  
                </svg>
                <svg className="icon" width="13" height="13" viewBox="0 0 13 13" fillRule="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.686523 3.6696C0.686523 2.74484 1.43619 1.99518 2.36094 1.99518H4.51495C5.26141 1.99518 5.95849 2.36824 6.37255 2.98934L6.38654 3.01032C6.80061 3.63142 7.49768 4.00448 8.24414 4.00448H11.0121C11.9369 4.00448 12.6865 4.75414 12.6865 5.6789V9.75337C12.6865 10.6781 11.9369 11.4278 11.0121 11.4278H2.36094C1.43619 11.4278 0.686523 10.6781 0.686523 9.75337V3.6696Z" />
                </svg>
                <svg className="icon" width="13" height="13" viewBox="0 0 13 13" fillRule="white" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.59157 12.0715C9.08477 10.7909 11.6916 8.18155 11.6916 5.57219C11.6916 2.74491 9.39966 0.452942 6.57238 0.452942C3.74509 0.452942 1.45312 2.74491 1.45312 5.57219C1.45312 8.18155 4.05998 10.7909 5.55318 12.0715C6.14618 12.5801 6.99857 12.5801 7.59157 12.0715ZM6.57257 7.40049C7.58231 7.40049 8.40087 6.58193 8.40087 5.57219C8.40087 4.56244 7.58231 3.74388 6.57257 3.74388C5.56282 3.74388 4.74426 4.56244 4.74426 5.57219C4.74426 6.58193 5.56282 7.40049 6.57257 7.40049Z" />
                </svg>
                <svg className="icon" width="13" height="13" viewBox="0 0 13 13" fillRule="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62062 0.757893L1.93512 6.69646C1.71662 6.97339 1.91682 7.37691 2.27272 7.37691H5.53868C5.68442 7.37691 5.80257 7.4937 5.80257 7.63778L5.80257 12.1719C5.80257 12.5733 6.31785 12.7476 6.56786 12.4307L11.2534 6.49214C11.4719 6.2152 11.2717 5.81169 10.9158 5.81169L7.64979 5.81169C7.50405 5.81169 7.3859 5.6949 7.3859 5.55082V1.01674C7.3859 0.615298 6.87063 0.441017 6.62062 0.757893Z" />
                </svg>
                <svg className="icon" width="12" height="12" viewBox="0 0 12 12" fillRule="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.24784 1.00269C7.41809 1.03459 6.64049 1.35146 6.02993 1.87976L6 1.90653L5.97057 1.8798C5.32607 1.32223 4.49561 1.00003 3.61433 1.00003C1.61877 1.00003 0 2.63184 0 4.63507C0 6.41626 1.02322 8.06903 2.69417 9.60096C3.25904 10.1188 3.86492 10.5897 4.47699 11.0082L4.72424 11.1743C5.0008 11.3567 5.23339 11.4984 5.39787 11.5914C5.58475 11.6954 5.78882 11.75 5.99955 11.75C6.21191 11.75 6.42094 11.6944 6.60538 11.589C6.82023 11.467 7.1372 11.2713 7.52184 11.0083C8.13408 10.5896 8.73999 10.1189 9.30494 9.60105C10.9765 8.06904 12 6.41632 12 4.63507C12.0012 2.63228 10.3824 1.00003 8.3866 1.00003L8.24784 1.00269Z" />
                </svg>
          </div>
          <div className="wheel"></div>
        </div>
      </div>
    </button></div>
    );
};

export default PayButton;
