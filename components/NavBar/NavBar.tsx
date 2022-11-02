import Image from "next/image";
import { Link } from "react-scroll";

//import logo
import logo from "../../assets/extra/logo.png";

//import components
import DrawerElement from "../drawer/Drawer";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src={logo} alt="ikazic logo" />
      </div>
      <DrawerElement />
      <div className="links">
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
        <Link
          activeClass="active"
          to="goals"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Objectifs
        </Link>
        <Link
          activeClass="active"
          to="faqs"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          FAQs
        </Link>
      </div>
      <Link
        to="newsletter"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="goToNewsletter"
      >
        <span>Newsletter</span>
      </Link>
    </nav>
  );
};

export default NavBar;
