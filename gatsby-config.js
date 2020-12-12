module.exports = {
  siteMetadata: {
    title: `Sérina Chhem`,
    description: `A student in design thinking and web development. `,
    author: `Sérina Chhem`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        quality:200,
      },
    },
    `gatsby-transformer-sharp`,
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-background-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { 
        path: `${__dirname}/src/components/userResearch`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { 
        path: `${__dirname}/src/components/roles`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
