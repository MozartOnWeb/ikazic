import React from "react";

export const Waitlist = () => {
  return (
    <section id="waitlist">
      <div className="top-section">
        <h3>Waitlist</h3>
        <h1>Rejoindre la liste d&apos;attente</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod impedit
          dignissimos sapiente. Assumenda, aliquam omnis!
        </p>
      </div>

      <div className="bottom-section">
        <form action="">
          <input
            className="input"
            placeholder="votre adresse mail"
            type="text"
          />
          <button className="submit" type="submit">
            Rejoindre
          </button>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
