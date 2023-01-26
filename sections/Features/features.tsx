import { useEffect } from "react";

import Image from "next/image";
import React from "react";

// import mockups
import featuresMockup1 from "../../assets/mockups/features.png";
import featuresMockup2 from "../../assets/mockups/features2.png";

// import icons
import forward from "../../assets/icons/forward-colored.png";
import download from "../../assets/icons/download.png";
import money from "../../assets/icons/money.png";
import phone from "../../assets/icons/phone.png";
import ui from "../../assets/icons/interface.png";
import folder from "../../assets/icons/folder.png";

//import gsap
import gsap from "gsap";

export const Features = () => {
  useEffect(() => {
    gsap.to(".features-headlines", {
      scrollTrigger: {
        trigger: ".features-headlines",
        start: "0px 80%",
        end: "bottom 100px",
        markers: false,
        toggleActions: "restart none none none",
        scrub: true,
      },
      x: 0,
      duration: 1,
      stagger: 0.3,
      opacity: 1,
    });
    gsap.to(".features-headlines2", {
      scrollTrigger: {
        trigger: ".features-headlines2",
        start: "0px 80%",
        end: "bottom 100px",
        markers: false,
        toggleActions: "restart none none none",
        scrub: true,
      },
      x: 0,
      duration: 1,
      stagger: 0.3,
      opacity: 1,
    });
  }, []);

  return (
    <div id="features">
      <section className="features-item">
        <div className="left-section">
          <div className="background-gradient"></div>
          <Image
            src={featuresMockup1}
            quality={100}
            alt="features first mockup"
          />
        </div>
        <div className="right-section">
          <h3 className="features-headlines">fonctionnalités</h3>
          <h1 className="features-headlines">
            Parceque nous <br /> Adorons la musique !
          </h1>
          {/* features list */}
          <div className="features-list">
            <div className="list-item features-headlines">
              <div className="icon">
                <Image src={forward} alt="forward icon" />
              </div>
              <div className="content">
                <h4>Streaming illimité</h4>
                <p>
                  Streaming sans limites avec notre service illimité. Accédez à
                  des milliers d&apos;artistes et d&apos;albums à tout moment.
                  Profitez d&apos;une qualité sonore exceptionnelle et
                  d&apos;une expérience de streaming fluide.
                </p>
              </div>
            </div>

            <div className="list-item features-headlines">
              <div className="icon">
                <Image src={download} alt="download icon" />
              </div>
              <div className="content">
                <h4>Ecoutez vos morceaux hors ligne</h4>
                <p>
                  Ne manquez jamais une chanson grâce à notre fonctionnalité
                  d&apos;écoute hors ligne. Téléchargez vos morceaux préférés
                  pour écouter sans connexion internet.
                </p>
              </div>
            </div>

            <div className="list-item features-headlines">
              <div className="icon">
                <Image src={money} alt="money icon" />
              </div>
              <div className="content">
                <h4>Achetez vos albums favoris</h4>
                <p>
                  Découvrez les meilleurs albums de vos artistes préférés et
                  ajouté les à collection personnelle en les achetant
                  directement sur notre plateforme.
                </p>
              </div>
            </div>
          </div>
          {/* features list */}
        </div>
      </section>
      {/* reverse section */}
      <section className="features-item reverse">
        <div className="left-section">
          <div className="background-gradient"></div>
          <Image
            src={featuresMockup2}
            quality={100}
            alt="features first mockup"
          />
        </div>
        <div className="right-section">
          <h3 className="features-headlines2">fonctionnalités</h3>
          <h1 className="features-headlines2">
            Parceque nous <br /> Adorons la musique !
          </h1>
          {/* features list */}
          <div className="features-list">
            <div className="list-item features-headlines2">
              <div className="icon">
                <Image src={phone} alt="phone icon" />
              </div>
              <div className="content">
                <h4>Une application cross-plateforme</h4>
                <p>
                  Notre application est là pour tous. Disponible sur iOS et
                  Android, elle vous permet de profiter de votre musique
                  préférée sur n&apos;importe quel appareil mobile. On oublie
                  personne.
                </p>
              </div>
            </div>

            <div className="list-item features-headlines2">
              <div className="icon">
                <Image src={ui} alt="ui icon" />
              </div>
              <div className="content">
                <h4>Une interface simple et épurée</h4>
                <p>
                  Notre interface est conçue pour vous faciliter la vie. Simple
                  et épurée, elle vous permet de naviguer facilement dans votre
                  bibliothèque de musique.
                </p>
              </div>
            </div>

            <div className="list-item features-headlines2">
              <div className="icon">
                <Image src={folder} alt="folder icon" />
              </div>
              <div className="content">
                <h4>Un lecteur local</h4>
                <p>
                  Notre lecteur de musique local vous permet d&apos;accéder et
                  d&apos;écouter les morceaux stockés sur sur appareil. Ikazic
                  est une plateforme qui centralise votre bibliothèque.
                </p>
              </div>
            </div>
          </div>
          {/* features list */}
        </div>
      </section>
    </div>
  );
};

export default Features;
