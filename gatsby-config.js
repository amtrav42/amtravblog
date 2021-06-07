const linkResolver = require("./src/utils/linkResolver");
const homePageReq = require("./custom_types/homepage.json");
const navReq = require("./custom_types/navigation.json");
const pageReq = require("./custom_types/page.json");

module.exports = {
  siteMetadata: {
    title: "Gatsby + Prismic Tutorial",
    description: "Learn how to integrate Prismic into your Gatsby project.",
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "amtravblog",
        linkResolver: () => linkResolver,
        schemas: {
          homepage: homePageReq,
          navigation: navReq,
          page: pageReq,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Lato:400,400,700,700i,900", "Amiri:400,400,700,700i"],
      },
    },
  ],
};
