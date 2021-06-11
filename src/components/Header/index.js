import React from "react";
import { Link } from "gatsby";
import HeaderStyles from "./header.module.css";

const Header = ({ isHomepage }) => {
  const homepageClass = isHomepage ? `${HeaderStyles.homepage}` : "";
  return (
    <header className={`${HeaderStyles.header} ${homepageClass}`}>
      <Link to="/"><div className={HeaderStyles.logo}>Example Site</div></Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/more-info">More Info</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
