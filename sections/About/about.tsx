import { useEffect } from "react";

import Image from "next/image";

//import about wave
import aboutWave from "../../assets/extra/aboutWave.svg";

//import about mockups
import firstMockup from "../../assets/mockups/about.png";
import secondMockup from "../../assets/mockups/about2.png";
import thirdMockup from "../../assets/mockups/about3.png";

//import icons
import headphone from "../../assets/icons/headphone.png";
import note from "../../assets/icons/note.png";
import micro from "../../assets/icons/micro.png";
import backward from "../../assets/icons/backward.png";

//import gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useEffect(() => {
    gsap.to(".about-top-section", {
      scrollTrigger: {
        trigger: ".about-top-section",
        start: "0px 80%",
        end: "bottom 100px",
        markers: false,
      },
      duration: 0.5,
      y: 0,
      opacity: 1,
      stagger: 0.5,
    });
    gsap.to(".about-mockups", {
      scrollTrigger: {
        trigger: ".about-mockups",
        start: "50px 70%",
        end: "50px 70px",
        markers: true,
        scrub: 3,
        toggleActions: "restart none none none",
      },
      duration: 1.5,
      scale: 1,
      skewX: 1,
      opacity: 1,
      stagger: 0.7,
    });
  }, []);

  return (
    <section id="about">
      <div className="top-section">
        <h3 className="about-top-section">à propos</h3>
        <h1 className="about-top-section">
          Pour la communauté, par la communauté
        </h1>
        <p className="about-top-section">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="bottom-section">
        <div className="about-wave">
          <Image src={aboutWave} alt="wave in about section" />
        </div>

        <div className="about-icons">
          <Image
            className="headphone about-icon"
            src={headphone}
            alt="headphone icon in about section"
            quality={100}
          />
          <Image
            className="note about-icon"
            src={note}
            alt="note icon in about section"
          />
          <Image
            className="micro about-icon"
            src={micro}
            alt="micro icon in about section"
            quality={100}
          />
          <Image
            className="backward about-icon"
            src={backward}
            alt="backwrad icon in about section"
            quality={100}
          />
        </div>

        <div className="mockups">
          <Image
            className="first-mockup about-mockups"
            src={firstMockup}
            alt="first mockup in about section"
            priority={true}
          />
          <Image
            className="second-mockup about-mockups"
            src={secondMockup}
            alt="second mockup in about section"
            priority={true}
          />
          <Image
            className="last-mockup about-mockups"
            src={thirdMockup}
            alt="third mockup in about section"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
