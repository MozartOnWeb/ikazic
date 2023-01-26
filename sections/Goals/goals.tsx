import React from "react";
import Image from "next/image";

//import mockups
import artistMock from "../../assets/mockups/artist.png";

export const Goals = () => {
  return (
    <section id="goals">
      <div className="top-section">
        <h3>Objectifs</h3>
        <h1>Pour l&apos;expension de la musique Malienne</h1>
        <p>
          La musique malienne est riche en histoire et en culture, elle reflète
          les influences de nombreux peuples qui ont peuplé cette région. Nous
          croyons qu&apos;il est important de préserver et de partager ces
          traditions musicales avec le monde entier.
        </p>
      </div>

      <div className="bottom-section">
        {/* bottom-left section */}
        <div className="bottom-left-right left">
          <div className="part">
            <div className="number">1</div>
            <h4>Pour les artistes</h4>
            <p>
              Permettre à tout artistes maliens, sans distinction de genre
              musical de distribuer sa musique facilement.
            </p>
          </div>

          {/* hide on desktop */}
          <div className="part hide-on-desktop">
            <div className="number number-red">2</div>
            <h4>Pour les utilisateurs</h4>
            <p>
              Offrir la meilleure expérience musicale possible en vous
              connectant à la musique malienne authentique et diversifiée.
            </p>
          </div>
          {/* hide on desktop */}

          <div className="part hide-on-mobile">
            <div className="number number-red">3</div>
            <h4>Pour le Mali</h4>
            <p>
              Contribuer au développement du secteur musical du Mali en
              apportant une solution de distribution moderne de la musique.
            </p>
          </div>
        </div>
        {/* bottom-left section */}

        {/* bottom-center section */}
        <div className="bottom-center">
          <div className="colored-bg"></div>
          <div className="mockup-container">
            <Image src={artistMock} alt="ikazic artist profile screen" />
          </div>
        </div>
        {/* bottom-center section */}

        {/* bottom-right section */}
        <div className="bottom-left-right right">
          <div className="part hide-on-mobile">
            <div className="number number-red">2</div>
            <h4>Pour les utilisateurs</h4>
            <p>
              Offrir la meilleure expérience musicale possible en vous
              connectant à la musique malienne authentique et diversifiée.
            </p>
          </div>

          {/* hide on desktop */}
          <div className="part hide-on-desktop">
            <div className="number number-red">3</div>
            <h4>Pour le Mali</h4>
            <p>
              Contribuer au développement du secteur musical du Mali en
              apportant une solution de distribution moderne de la musique.
            </p>
          </div>
          {/* hide on desktop */}

          <div className="part">
            <div className="number">4</div>
            <h4>Pour l&apos;Afrique</h4>
            <p>
              Nous voulons également créer un pont entre les artistes africains
              et le monde entier et leur permettre établir un public
              international.
            </p>
          </div>
        </div>
        {/* bottom-right section */}
      </div>
    </section>
  );
};

export default Goals;
