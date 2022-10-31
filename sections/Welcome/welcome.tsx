import React from "react";

import Image from "next/image";

import waves from "../../assets/extra/welcomeWaves.svg";

export const Welcome = () => {
  return (
    <section id="welcome">
      <div>
        <Image src={waves} alt="waves" />
      </div>
    </section>
  );
};

export default Welcome;
