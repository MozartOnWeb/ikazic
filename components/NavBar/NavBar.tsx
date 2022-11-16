import { useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

//import logo
import logo from "../../assets/extra/logo.png";

//import gsap
import gsap from "gsap";

const NavBar = () => {
  useEffect(() => {
    gsap.to("nav", {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
    });
    gsap.to(".first-heading", {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
    });
  }, []);

  return (
    <nav>
      <div className="logo">
        <Image quality={100} src={logo} alt="ikazic logo" />
      </div>
      <div className="links">
        <Link
          activeClass="active"
          to="welcome"
          spy={true}
          smooth={true}
          duration={500}
          offset={-200}
        >
          Accueil
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
        to="waitlist"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="goToWaitlist"
      >
        <span>Waitlist</span>
      </Link>
    </nav>
  );
};

export default NavBar;
