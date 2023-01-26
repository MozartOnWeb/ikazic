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
          Nous comprenons que vous pourriez avoir des questions sur notre
          application de streaming. C&apos;est pourquoi nous avons compilé une
          liste de questions fréquemment posées pour vous aider à tirer le
          meilleur parti de votre expérience d&apos;écoute. Vous y trouverez des
          réponses à des questions telles que :
        </p>
      </div>

      <div className="bottom-section">
        <div className="faqs-item left-faqs">
          <div className="faq">
            <h4>Qu&apos;est-ce que l&apos;application de streaming audio?</h4>
            <p>
              Une application de streaming audio est une plateforme qui vous
              permet d&apos;écouter en continu de la musique ou des podcasts sur
              votre appareil mobile ou ordinateur.
            </p>
          </div>
          <div className="faq">
            <h4>Dois-je payer pour utiliser la plateforme?</h4>
            <p>
              Les utilisateurs pourront soit écouter gratuitement les singles,
              les mixtapes et les EP. Sur ce point la plateforme est totalement
              gratuite. La monétisation se fait sur la vente des albums.
            </p>
          </div>
          <div className="faq">
            <h4>Pourquoi opter pour Ikazic ?</h4>
            <p>
              Parceque nous associons ce qui se fait de mieux ailleurs avec ce
              qui se fait de mieux localement pour vous proposer une expérience
              de streaming au gout du jour et permettre à nos artistes de
              s&apos;épanouir pleinement.
            </p>
          </div>
        </div>

        <div className=" faqs-item right-faqs">
          <div className="faq">
            <h4>
              Quels genres de musiques sont disponibles sur la plateforme ?
            </h4>
            <p>
              Nous proposons une grande variété de musiques malienne; tous les
              genres de musique malienne trouveront leur place sur la plateforme
              sans distinction de genres ou de langues.
            </p>
          </div>
          <div className="faq">
            <h4>
              Puis-je utiliser l&apos;application sur plusieurs appareils en
              même temps?
            </h4>
            <p>
              Oui Il est possible d&apos;utiliser le même compte Ikazic sur
              plusieurs appareils en même temps. Cependant nous limitons ce
              nombre à trois appareils par compte.
            </p>
          </div>
          <div className="faq">
            <h4>Comment puis-je trouver les dernières sorties ?</h4>
            <p>
              Ikazic mettra en avant les dernières sorties des artistes que vous
              suivez ou des oeuvres tendances pour que vous en profitiez à
              souhait.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
