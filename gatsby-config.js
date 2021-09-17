module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "B2-Modelling",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://boiling-basin-59342.herokuapp.com/"
          : "http://localhost:1337",
        contentTypes: [`galleries`],
        queryLimit: 1000,
      },
    },
  ],
};
