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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="line"></div>
          </div>
        </div>

        <div className="step second-step">
          <p className="number">02</p>
          <div className="content">
            <h3 className="headline">Accédez à la bibliothèque</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="line"></div>
          </div>
        </div>

        <div className="step third-step">
          <p className="number">03</p>
          <div className="content">
            <h3 className="headline">Ecoutez sans limite</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </section>
      {/* right section */}
    </section>
  );
};

export default HowItWork;
