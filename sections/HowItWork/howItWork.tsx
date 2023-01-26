import React, { useEffect } from "react";
import Link from "next/link";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWork = () => {
  useEffect(() => {
    gsap.to("#how-it-work", {
      scrollTrigger: {
        trigger: "#how-it-work",
        start: "20px 80%",
        end: "bottom 100px",
        toggleActions: "restart none none none",
        scrub: true,
        markers: false,
      },
      duration: 2,
      scale: 1.1,
    });
    gsap.to(".step", {
      scrollTrigger: {
        trigger: ".step",
        start: "10px 80%",
        end: "bottom 100px",
        markers: false,
        toggleActions: "restart none none none",
        scrub: true,
      },
      duration: 2,
      x: 0,
      opacity: 1,
      stagger: 0.5,
    });
    gsap.to(".how-it-work-desc", {
      scrollTrigger: {
        trigger: ".how-it-work-desc",
        start: "0px 80%",
        end: "bottom 100px",
        markers: false,
        toggleActions: "restart none none none",
        scrub: true,
      },
      duration: 2,
      x: 0,
      opacity: 1,
      stagger: 0.5,
    });
  }, []);

  return (
    <section id="how-it-work">
      {/* left section */}
      <section className="left-section">
        <h1 className="how-it-work-desc">
          Tout devient <br /> Tellement plus <br /> Simple !
        </h1>
        <p className="how-it-work-desc">
          Simplifiez votre expérience de streaming. Accédez à des millions de
          chansons en un seul clic. Créez des playlists personnalisées et
          écoutez sans interruption. Avec notre application, tout devient
          tellement plus simple.
        </p>
        <Link href={"/#"} className="download how-it-work-desc">
          <span>Waitlist</span>
        </Link>
      </section>
      {/* left section */}

      {/* right section */}
      <section className="right-section how-it-work-section">
        <div className="step first-step">
          <p className="number">01</p>
          <div className="content">
            <h3 className="headline">Créez votre compte</h3>
            <p className="paragraph">
              Inscrivez-vous dès maintenant pour accéder à tous nos services
              exclusifs. Créez un compte en quelques étapes simples et rapides.
              Profitez de notre plateforme en toute sécurité et en toute
              simplicité.
            </p>
            <div className="line"></div>
          </div>
        </div>

        <div className="step second-step">
          <p className="number">02</p>
          <div className="content">
            <h3 className="headline">Accédez à la bibliothèque</h3>
            <p className="paragraph">
              Découvrez votre collection de musique personnelle en un seul clic.
              Accédez à votre bibliothèque à partir de n&apos;importe où et à
              tout moment. Profitez de vos chansons préférées en streaming haute
              qualité.
            </p>
            <div className="line"></div>
          </div>
        </div>

        <div className="step third-step">
          <p className="number">03</p>
          <div className="content">
            <h3 className="headline">Ecoutez sans limite</h3>
            <p className="paragraph">
              Laissez votre musique vous accompagner partout avec notre service
              d&apos;écoute illimité. Découvrez de nouveaux artistes et albums
              sans limite. Profitez de la meilleure expérience d&apos;écoute de
              musique en ligne.
            </p>
          </div>
        </div>
      </section>
      {/* right section */}
    </section>
  );
};

export default HowItWork;
