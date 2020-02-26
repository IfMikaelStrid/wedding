module.exports = {
  siteMetadata: {
    title: `Micke \& Jossan`,
    description: `Snart är det dags, 13e juni ska vi gifta oss, hoppas ni vill fira denna underbara dag med oss.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-Micke-Jossan`,
        short_name: `Jocke2020`,
        start_url: `/`,
        background_color: `#e9c3c3`,
        theme_color: `#e9c3c3`,
        display: `minimal-ui`,
        icon: `src/images/lav-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
