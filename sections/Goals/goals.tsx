import React from "react";
import Image from "next/image";

//import mockups
import artistMock from "../../assets/mockups/artist.png";

export const Goals = () => {
  return (
    <section id="goals">
      <div className="top-section">
        <h3>Objectifs</h3>
        <h1>Pour l&apos;expension de la musique</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          corrupti eaque aspernatur sed perferendis animi?
        </p>
      </div>
      <div className="bottom-section">
        {/* bottom-left section */}
        <div className="bottom-left-right left">
          {/* top part */}
          <div className="part">
            <div className="number">1</div>
            <h4>Pour les artistes</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              eos, ipsam doloribus nostrum ex iste.
            </p>
          </div>

          {/* hidden part on desktop */}
          <div className="part desktop-hidden">
            <div className="number number-red">2</div>
            <h4>Pour les artistes</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              eos, ipsam doloribus nostrum ex iste.
            </p>
          </div>
          {/* hidden part on desktop */}

          {/* hidden part on mobile */}
          <div className="part mobile-hidden">
            <div className="number number-red">3</div>
            <h4>Pour le Mali</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              eos, ipsam doloribus nostrum ex iste.
            </p>
          </div>
          {/* hidden part on mobile */}
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
          {/* top part */}

          {/* hidden part on mobile */}
          <div className="part">
            <div className="number number-red number-2">2</div>
            <h4>Pour les utilisateurs</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              eos, ipsam doloribus nostrum ex iste.
            </p>
          </div>
          {/* hidden part on mobile */}

          {/* hidden part on desktop */}
          <div className="part desktop-hidden">
            <div className="number number-red">3</div>
            <h4>Pour les utilisateurs</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              eos, ipsam doloribus nostrum ex iste.
            </p>
          </div>
          {/* hidden part on desktop */}

          {/* bottom part */}
          <div className="part">
            <div className="number number-4">4</div>
            <h4>Pour l&apos;Afrique</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              eos, ipsam doloribus nostrum ex iste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
