import React from "react";
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import HomepageBannerStyles from "./homepageBanner.module.css";

const HomepageBanner = ({ bannerContent }) => (
  <section
    className={HomepageBannerStyles.banner}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${bannerContent.background.url})`,
    }}
  >
    <div className={HomepageBannerStyles.content}>
      <h2 className={HomepageBannerStyles.title}>
        {RichText.asText(bannerContent.title.raw)}
      </h2>
      <p className={HomepageBannerStyles.description}>
        {RichText.asText(bannerContent.description.raw)}
      </p>
      <Link to={bannerContent.link.url} className={HomepageBannerStyles.button}>
        {RichText.asText(bannerContent.linkLabel.raw)}
      </Link>
    </div>
  </section>
);

export default HomepageBanner;
