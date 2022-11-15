import React from "react";

export const Waitlist = () => {
  //submit form function
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const email = formData.get("email");

    form.reset();

    console.log(email);
  };

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
