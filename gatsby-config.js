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
        "url": "https://gatsby.victoriasoprano.com/graphql",
        schema: {
          timeout: 1000000,
          perPage: 10,
          requestConcurrency: 5,
        },
      },
    },

    // {
    //   resolve: "gatsby-source-woocommerce",
    //   options: {
    //     // Base URL of Wordpress site
    //     api: 'gatsby.victoriasoprano.com',
    //     // true if using https. false if nah.
    //     https: true,
    //     api_keys: {
    //       consumer_key: 'ck_fd46b3449a995ce1626e38eb45cb3e27a2b503cb',
    //       consumer_secret: 'cs_433856b3f58a7ff67f04bad79359f19f467062ad',
    //     },
    //     // Array of strings with fields you'd like to create nodes for...
    //     fields: ['products']
    //   }
    // },


    // {
    //   resolve: '@pasdo501/gatsby-source-woocommerce',
    //   options: {
    //     // Base URL of Wordpress site
    //     api: 'gatsby.victoriasoprano.com',
    //
    //     // set to false to not see verbose output during build
    //     // default: true
    //     verbose: true,
    //
    //     // true if using https. otherwise false.
    //     https: true,
    //     api_keys: {
    //       consumer_key: 'ck_fd46b3449a995ce1626e38eb45cb3e27a2b503cb',
    //       consumer_secret: 'cs_433856b3f58a7ff67f04bad79359f19f467062ad',
    //     },
    //           // Array of strings with fields you'd like to create nodes for...
    //           fields: ['products', 'products/categories', 'products/attributes'],
    //           // Send the API keys as query string parameters instead of using the authorization header
    //           // OPTIONAL: defaults to false
    //           query_string_auth: false,
    //           // Version of the woocommerce API to use
    //           // OPTIONAL: defaults to 'wc/v3'
    //           api_version: 'wc/v3',
    //           // OPTIONAL: How many results to retrieve *per request*
    //           per_page: 100,
    //           // OPTIONAL: Custom WP REST API url prefix, only needed if not using
    //           // the default prefix ('wp-json').
    //           // wpAPIPrefix: 'wp-json',
    //           // OPTIONAL: Support for URLs with ports, e.g. 8080; defaults to no port
    //           // port: '8080',
    //           // OPTIONAL: Encoding; default to 'utf8'
    //           encoding: 'utf8',
    //           // OPTIONAL: Custom Axios config (see https://github.com/axios/axios) - note that this can override other options.
    //           axios_config: {
    //             // Axios config options
    //           }
    //       }
    // },
    "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "testID"
      }
    }, "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-mdx", "gatsby-transformer-remark", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }]
};