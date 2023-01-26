import React, { useState } from "react";

export const Waitlist = ({ onSubmitted }: any) => {
  //submit form function
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const email = formData.get("email");
    onSubmitted({ EMAIL: email });

    form.reset();

    console.log(email);
  };

  return (
    <section id="waitlist">
      <div className="top-section">
        <h3>Waitlist</h3>
        <h1>Rejoindre la liste d&apos;attente</h1>
        <p>
          En attendant la sortie de Ikazic, vous pouvez rejoindre la liste
          d&apos;attente pour être notifier à sa sortie.
        </p>
      </div>

      <div className="bottom-section">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="votre adresse mail"
            type="email"
            name="email"
            id="email"
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
