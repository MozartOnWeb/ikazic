import React from "react";
import Image from "next/image";
import Link from "next/link";

//Import Icons & SVG
import welcomeWaves from "../../assets/extra/welcomeWaves.svg";
import apple from "../../assets/icons/apple.png";
import google from "../../assets/icons/google.png";
import welcomeMockup from "../../assets/mockups/welcome.png";

export const Welcome = () => {
  return (
    <section id="welcome">
      <div className="welcome-waves">
        <Image src={welcomeWaves} alt="ikazic waves" />
      </div>
      <h1 className="first-heading">
        Toute la musique malienne dans votre poche
      </h1>
      {/* <Image
        className="welcome-mockup"
        src={welcomeMockup}
        alt="ikazic player screen"
      /> */}
      <div className="right-section">
        <h1 className="second-heading">Ikazic</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="stores">
          <Link href={"/#"} className="store">
            <Image src={apple} alt="apple-logo" />
            <p>App Store</p>
          </Link>
          <Link href={"/#"} className="store">
            <Image src={google} alt="google-logo" />
            <p>Play Store</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
