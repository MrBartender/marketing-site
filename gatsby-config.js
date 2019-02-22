module.exports = {
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MrBartender`,
        short_name: `MrBartender`,
        start_url: `/`,
        background_color: `#BE432A`,
        theme_color: `#BE432A`,
        display: `standalone`,
        icon: `src/images/mrbartender.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`
  ],
}
