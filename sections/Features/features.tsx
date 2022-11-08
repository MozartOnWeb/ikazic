import Image from "next/image";
import React from "react";

// import mockups
import featuresMockup1 from "../../assets/mockups/features.png";

// import icons
import forward from "../../assets/icons/forward-colored.png";
import download from "../../assets/icons/download.png";
import money from "../../assets/icons/money.png";

export const Features = () => {
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
          <h3>fonctionnalités</h3>
          <h1>
            Parceque nous <br /> Adorons la musique !
          </h1>
          {/* features list */}
          <div className="features-list">
            <div className="list-item">
              <div className="icon">
                <Image src={forward} alt="forward icon" />
              </div>
              <div className="content">
                <h4>Streaming illimité</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate illum porro doloribus, laboriosam blanditiis.
                </p>
              </div>
            </div>

            <div className="list-item">
              <div className="icon">
                <Image src={download} alt="download icon" />
              </div>
              <div className="content">
                <h4>Ecoutez vos morceaux hors ligne</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate illum porro doloribus, laboriosam blanditiis.
                </p>
              </div>
            </div>

            <div className="list-item">
              <div className="icon">
                <Image src={money} alt="money icon" />
              </div>
              <div className="content">
                <h4>Achetez vos albums favoris</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate illum porro doloribus, laboriosam blanditiis.
                </p>
              </div>
            </div>
          </div>
          {/* features list */}
        </div>
      </section>

      <section className="features-item reverse">
        <div className="left-section">
          <div className="background-gradient"></div>
          <Image
            src={featuresMockup1}
            quality={100}
            alt="features first mockup"
          />
        </div>
        <div className="right-section">
          <h3>fonctionnalités</h3>
          <h1>
            Parceque nous <br /> Adorons la musique !
          </h1>
          {/* features list */}
          <div className="features-list">
            <div className="list-item">
              <div className="icon">
                <Image src={forward} alt="forward icon" />
              </div>
              <div className="content">
                <h4>Streaming illimité</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate illum porro doloribus, laboriosam blanditiis.
                </p>
              </div>
            </div>

            <div className="list-item">
              <div className="icon">
                <Image src={download} alt="download icon" />
              </div>
              <div className="content">
                <h4>Ecoutez vos morceaux hors ligne</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate illum porro doloribus, laboriosam blanditiis.
                </p>
              </div>
            </div>

            <div className="list-item">
              <div className="icon">
                <Image src={money} alt="money icon" />
              </div>
              <div className="content">
                <h4>Achetez vos albums favoris</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate illum porro doloribus, laboriosam blanditiis.
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
