import { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

export const Drawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <aside className="drawer">
      {!open && (
        <div onClick={showDrawer} className="humburger-wrapper">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7H21"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 12H21"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 17H21"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      )}
      {open && (
        <div className="drawer-links">
          <Link
            onClick={onClose}
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
      )}
    </aside>
  );
};

export default Drawer;
