const dotenv = require('dotenv');
const path = require(`path`);
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
        useACF: true,
        schema: {
          timeout: 1000000,
          perPage: 10,
          requestConcurrency: 5,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 1, // i cant remember if this was a fix or not, but i just killed all concurrency which the command line probably overrode
              maxFileSizeBytes: 100000000, // large images would die if they were larger than.. like, 5mb by default? undocumented and threw no warnings, just died.
            },
          },
        },
      },
    },
    "gatsby-plugin-apollo",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "AW-738495468"
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Victoria Soprano`,
        short_name: `Collection Victoria Soprano`,
        start_url: '/',
        background_color: `#f7f4ed`,
        theme_color: `#86644b`,
        display: `standalone`,
        icon: `src/assets/img/gatsby-icon.png`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-images",
    //       },
    //       "gatsby-remark-lazy-load",
    //     ]
    //   }
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "images",
    //     "path": "./src/assets/img/"
    //   },
    //   __key: "images"
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //     //path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //     //path: path.join(__dirname, `src`, `images`),
    //   },
    // },
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