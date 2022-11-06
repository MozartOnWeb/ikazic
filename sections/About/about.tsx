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

export const About = () => {
  return (
    <section id="about">
      <div className="top-section">
        <h3>à propos</h3>
        <h1>Pour la communauté, par la communauté</h1>
        <p>
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
            className="headphone"
            src={headphone}
            alt="headphone icon in about section"
          />
          <Image className="note" src={note} alt="note icon in about section" />
          <Image
            className="micro"
            src={micro}
            alt="micro icon in about section"
          />
          <Image
            className="backward"
            src={backward}
            alt="backwrad icon in about section"
          />
        </div>

        <div className="mockups">
          <Image
            className="first-mockup"
            src={firstMockup}
            alt="first mockup in about section"
          />
          <Image
            className="second-mockup"
            src={secondMockup}
            alt="second mockup in about section"
          />
          <Image
            className="last-mockup"
            src={thirdMockup}
            alt="third mockup in about section"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
