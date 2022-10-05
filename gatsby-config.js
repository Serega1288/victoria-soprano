const dotenv = require('dotenv');

dotenv.config({
  path: '.env',
});


module.exports = {
  siteMetadata: {
    title: `Victoria Soprano`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        //url: process.env.WPGRAPHQL_URL,
        "url": process.env.SERVER_QRAPHQL_URL,
        schema: {
          timeout: 1000000,
          perPage: 10,
          requestConcurrency: 5,
        },
      },
    },
    "gatsby-plugin-image", "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "testID"
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: '/',
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/img/gatsby-icon.png`,
      },
    },
    "gatsby-plugin-mdx", "gatsby-transformer-remark", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/assets/img/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns:  ['*.html'],
        },
      },
    },

  ]
};