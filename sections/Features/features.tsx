import React from "react";

export const Features = () => {
  return (
    <section id="features">
      <div className="left-section"></div>
      <div className="right-section">
        <h3>fonctionnalités</h3>
        <h1>
          Parceque nous <br /> Adorons la musique !
        </h1>
        {/* features list */}
        <div className="features-list">
          <div className="list-item">
            <div className="icon"></div>
            <div className="content">
              <h4>Streaming illimité</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate illum porro doloribus, laboriosam blanditiis.
              </p>
            </div>
          </div>

          <div className="list-item">
            <div className="icon"></div>
            <div className="content">
              <h4>Ecoutez vos morceaux hors ligne</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate illum porro doloribus, laboriosam blanditiis.
              </p>
            </div>
          </div>

          <div className="list-item">
            <div className="icon"></div>
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
  );
};

export default Features;
