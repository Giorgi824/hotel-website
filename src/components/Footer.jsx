// Logo
import { Link } from "react-router-dom";
import LogoWhite from "../assets/img/logo-white.svg";
const Footer = () => {
  function handleScrolling() {
    window.scrollTo(0, 0);
  }
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex justify-between">
        <Link to="/" onClick={handleScrolling}>
          <img src={LogoWhite} alt="" />
        </Link>
        Copyright &copy; 2023. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
