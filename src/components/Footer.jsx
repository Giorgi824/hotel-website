// Logo
import { Link } from "react-router-dom";
import LogoWhite from "../assets/img/logo-white.svg";
import ScrollToTop from "./ScrollToTop";
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
const Footer = () => {
  const { handleScrolling } = useContext(RoomContext);
  return (
    <footer className="bg-primary py-12">
      <ScrollToTop />
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
