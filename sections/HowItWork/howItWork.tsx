import Link from "next/link";

const HowItWork = () => {
  return (
    <section id="how-it-work">
      {/* left section */}
      <section className="left-section">
        <h1>
          Tout devient <br /> Tellement plus <br /> Simple !
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link href={"/#"} className="download">
          <span>Waitlist</span>
        </Link>
      </section>
      {/* left section */}

      {/* right section */}
      <section className="right-section">
        <div className="step first-step">
          <p className="number">01</p>
          <div className="content">
            <h3 className="headline">Créez votre compte</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="line"></div>
          </div>
        </div>

        <div className="step second-step">
          <p className="number">02</p>
          <div className="content">
            <h3 className="headline">Accédez à la bibliothèque</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="line"></div>
          </div>
        </div>

        <div className="step third-step">
          <p className="number">03</p>
          <div className="content">
            <h3 className="headline">Ecoutez sans limite</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </section>
      {/* right section */}
    </section>
  );
};

export default HowItWork;
