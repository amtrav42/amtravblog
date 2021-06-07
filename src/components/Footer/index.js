import React from "react";
import FooterStyles from "./footer.module.css";

const Footer = () => (
  <footer className={FooterStyles.footer}>
    <p>
      Proudly published with
      {" "}
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">Prismic</a>
      <br />
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        <img className="footer-logo" src="somthing" alt="Prismic logo" />
      </a>
    </p>
  </footer>
);

export default Footer;
