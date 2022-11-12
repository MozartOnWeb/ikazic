import React from "react";

import Image from "next/image";

//import about wave
import aboutWave from "../../assets/extra/aboutWave.svg";

export const FAQs = () => {
  return (
    <section id="faqs">
      <div className="about-wave">
        <Image src={aboutWave} alt="wave in faqs section" />
      </div>
      <div className="top-section">
        <h3>FAQS</h3>
        <h1>Questions posées fréquemment !</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit vitae tempora autem nisi maiores aliquam quaerat, illo,
          rem nobis magnam sed assumenda aperiam labore quae.
        </p>
      </div>

      <div className="bottom-section">
        <div className="faqs-item left-faqs">
          <div className="faq">
            <h4>Questions posées fréquemment !</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quisquam ea dolor.
            </p>
          </div>
          <div className="faq">
            <h4>Questions posées fréquemment !</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nobis corrupti delectus necessitatibus dolorum commodi aliquam qui
              deserunt at distinctio?
            </p>
          </div>
          <div className="faq">
            <h4>Questions posées fréquemment !</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id saepe
              assumenda magnam, a minus aperiam?
            </p>
          </div>
        </div>

        <div className=" faqs-item right-faqs">
          <div className="faq">
            <h4>Questions posées fréquemment !</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              ratione maxime necessitatibus! Ipsam illum aut ducimus dolorem,
              distinctio, soluta quibusdam quos temporibus odio praesentium
              laboriosam! Harum deleniti quidem blanditiis sequi.
            </p>
          </div>
          <div className="faq">
            <h4>Questions posées fréquemment !</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              et quo quod quasi blanditiis illum magnam, cumque veritatis!
            </p>
          </div>
          <div className="faq">
            <h4>Questions posées fréquemment !</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quisquam ea dolor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
