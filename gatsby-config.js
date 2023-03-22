const dotenv = require('dotenv')
const path = require(`path`)
const fs = require('fs')

dotenv.config({
  path: '.env',
});


module.exports = {
  siteMetadata: {
    title: `Victoria Soprano`,
    siteUrl: `https://victoriasoprano.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "621715872942839",
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: process.env.YOUR_HOTJAR_ID,
        sv: process.env.YOUR_HOTJAR_SNIPPET_VERSION,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -133
      }
    },
    "gatsby-plugin-use-query-params",
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://victoriasoprano.us1.list-manage.com/subscribe/post?u=98f0c6abf8aa92fd64b79bf58&amp;id=6172fe3458&amp;f_id=00b902e2f0', // string; add your MC list endpoint here; see instructions below
        timeout: 35000, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://victoriasoprano.com',
        sitemap: 'https://victoriasoprano.com/sitemap/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
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
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: process.env.SERVER_QRAPHQL_URL
      }
    },
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [800, 1400, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-NJPQ7FXGH0"
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
        icon: `src/assets/img/favicon.png`,
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

    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `blogs`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        { 
          allWpProduct {
            nodes {
              id
              title
              uri
              featuredImage {
                node {
                  localFile {
                    publicURL
                    childImageSharp {
                      gatsbyImageData (
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                      )
                    }
                  }
                }
              }
            }
          }
        } 
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'uri', 'img'],
        normalizer: ({ data }) =>
            data.allWpProduct.nodes.map((node) => ({
              id: node.id,
              title: node.title,
              uri: node.uri,
              img: node?.featuredImage?.node.localFile.childImageSharp
            })),
      },
    },

    // {
    //   resolve: 'gatsby-plugin-local-search',
    //   options: {
    //     name: 'product',
    //     engine: 'lunr',
    //     query: fs.readFileSync(
    //         path.resolve(__dirname, 'src/localSearchQuery.graphql'),
    //         'utf-8',
    //     ),
    //     ref: 'url',
    //     index: ['title'],
    //     store: ['title'],
    //     normalizer: ({ data }) =>
    //         data.allWpProduct.nodes.map((node) => {
    //           // const content = valuesDeep(node.data?.body).join(' ')
    //
    //           return {
    //             title: node.data?.title ?? node.data?.title?.text,
    //           }
    //         }),
    //   },
    // },

  ]
};
