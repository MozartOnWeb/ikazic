import Image from "next/image";

import { Link } from "react-scroll";

//import ikazic logo
import Logo from "../../assets/extra/logo.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="content">
        <div className="ikazic">
          <Image src={Logo} alt="ikazic logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem, dolore similique? Minima, voluptatum nostrum nulla
            facilis ea, quibusdam voluptate molestiae.
          </p>
        </div>

        <div className="details">
          <h3>Liens</h3>
          <Link
            activeClass="active"
            to="welcome"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
          >
            Acceuil
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            A propos
          </Link>
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            Fonctionnalités
          </Link>
        </div>

        <div className="details">
          <h3>Contacts</h3>
          <p>Badalabougou, Bamako, Mali</p>
          <p>ikazic@gmail.com</p>
          <p>00223-78437323</p>
        </div>

        <div className="details last-detail">
          <h3>A propos de nous</h3>
          <p>Par l&apos;équipe de</p>
          <p>Yoboo Studio</p>
        </div>
      </div>
      <div className="bottom-section">
        <div className="divider"></div>
        <div className="copyright-content">
          <span>Copyright2022</span>
          <span>ikazic.ml tout droit réservé</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
