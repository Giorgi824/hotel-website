import { useEffect, useState } from "react";
import logoWhite from "../assets/img/logo-white.svg";
import logoDark from "../assets/img/logo-dark.svg";
import { Link } from "react-router-dom";

const headerLinks = ["Home", "Rooms", "Restaurant", "SPA", "Contact"];

const Header = () => {
  const [header, setHeader] = useState(false);
  function handleScrolling() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  }, [header]);

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-g" : "bg-transparent py-8"
      } fixed z-50 w-full trnsition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        <Link to="/" onClick={handleScrolling}>
          <img
            className="w-[160px]"
            src={header ? logoDark : logoWhite}
            alt=""
          />
        </Link>
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}
        >
          {headerLinks.map((txt, idx) => {
            return (
              <Link
                key={idx}
                to="/"
                className="hover:text-accent transition"
                onClick={handleScrolling}
              >
                {txt}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
