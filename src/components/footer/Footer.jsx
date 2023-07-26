import React from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
          maiores, facilis ad veritatis fuga eligendi esse nam earum deleniti
          quasi dignissimos, quam doloribus atque dolorum assumenda aspernatur
          porro provident odio?
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebook />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
