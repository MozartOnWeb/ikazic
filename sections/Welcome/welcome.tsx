import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//import gsap
import gsap from "gsap";

//Import Icons & SVG
import welcomeWaves from "../../assets/extra/welcomeWaves.svg";
import apple from "../../assets/icons/apple.png";
import google from "../../assets/icons/google.png";
import welcomeMockup from "../../assets/mockups/welcome.png";

export const Welcome = () => {
  useEffect(() => {
    gsap.to(".welcome-waves", {
      opacity: 1,
      scale: 1,
      duration: 0.85,
      delay: 0.2,
      ease: "Expo.easeOut",
    });
    gsap.to(".welcome-mockup", {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 0.45,
      ease: "Power3.easeOut",
    });
    gsap.to(".first-heading", {
      opacity: 1,
      x: 0,
      duration: 1.3,
      delay: 0.8,
    });
    gsap.to(".left-desc", {
      opacity: 1,
      x: 0,
      duration: 1.1,
      delay: 1.2,
      stagger: 0.2,
    });
  }, []);
  return (
    <section id="welcome">
      <div className="welcome-waves">
        <Image src={welcomeWaves} alt="ikazic waves" quality={100} />
      </div>
      <h1 className="first-heading">
        Toute la musique <br /> malienne dans <br /> votre poche
      </h1>
      <Image
        className="welcome-mockup"
        src={welcomeMockup}
        alt="ikazic player screen"
        quality={100}
        priority={true}
      />
      <div className="right-section">
        <h1 className="second-heading left-desc">Ikazic</h1>
        <p className="description left-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="stores">
          <Link href={"/#"} className="store left-desc">
            <Image src={apple} alt="apple-logo" />
            <p>App Store</p>
          </Link>
          <Link href={"/#"} className="store left-desc">
            <Image src={google} alt="google-logo" />
            <p>Play Store</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
