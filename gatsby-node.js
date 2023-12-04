const path = require('path');


// template
//const postTemplate = path.resolve('./src/templates/SinglePost.js');
//const frontTemplate = path.resolve('./src/templates/FrontPage.js');
//const categoryTemplate = path.resolve('./src/templates/SingleCategory.js');

// create home page
// const createFrontPage = (createPage, posts) => {
//
//     const { nodes } = posts;
//     // const postsPerPage = 4;
//     // const numPages = Math.ceil(nodes.length / postsPerPage);
//
//     Array.from({length: numPages}).forEach((_,i) =>{
//         createPage({
//             //path: i === 0 ? '/' : `/page/${i + 1}`,
//             path: '/',
//             component: frontTemplate,
//             context: {
//                 //limit: postsPerPage,
//                 //skip: i * postsPerPage,
//                 //numPages,
//                 //currentPage: i + 1,
//             }
//         })
//     })
// }

const frontTemplate = path.resolve('./src/templates/FrontPage.js')
const pageTemplate = path.resolve(`./src/templates/page.js`)
const postTemplate = path.resolve(`./src/templates/post.js`)
const blogTemplate = path.resolve(`./src/templates/blog.js`)
const categoryProductTemplate = path.resolve(`./src/templates/CategoryProduct.js`)
const productTemplate = path.resolve(`./src/templates/Product.js`)


const createBlogPage = (createPage, posts) => {

    const { nodes } = posts;
    const postsPerPage = 4;
    const numPages = Math.ceil(nodes.length / postsPerPage);

    Array.from({length: numPages}).forEach((_,i) =>{
        createPage({
            path: i === 0 ? '/blog/' : `/blog/page/${i + 1}`,
            component: blogTemplate,
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            }
        })
    })
}

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    return graphql(`
        {
          allWpPost {
            nodes {
              slug
              title 
              content
              ACFconstructor {
                const {
 
                  ... on WpPost_Acfconstructor_Const_Editor {
                      fieldGroupName
                      text
                  } 
                
                  ... on WpPost_Acfconstructor_Const_Banner {
                    fieldGroupName
                    title
                    banner {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                    bannerMobile {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                  }
                  
                  ... on WpPost_Acfconstructor_Const_Collections {
                    blockTitle
                    fieldGroupName
                    collection {
                      title
                      text
                      img1 {
                        localFile {
                          publicURL
                          childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                          }
                        }
                      }
                      img2 {
                        localFile {
                          publicURL
                          childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                          }
                        }
                      }
                      collectionUrl
                    }
                  }
                  
                  ... on WpPost_Acfconstructor_Const_Videovoutube {
                    blockTitle
                    fieldGroupName
                    video
                    videofon {
                      localFile { 
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      } 
                    }
                    videofon {
                      localFile { 
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      } 
                    } 
                    videofonMobile {
                      localFile { 
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      } 
                    }
                  }
                   
                  ... on WpPost_Acfconstructor_Const_Instagram {
                    blockTitle0
                    blockTitle1
                    blockTitle2
                    blockTitle3
                    channelname
                    channelurl
                    fieldGroupName 
                    image1 {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                    image2 {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                  } 
                   
                  ... on WpPost_Acfconstructor_Const_Slider {
                    fieldGroupName
                    blocktitle 
                    sliders {
                      fotoSlider {
                        localFile {
                          publicURL
                          childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                          }
                        }
                      }
                      fotoSliderMob {
                        localFile {
                          publicURL
                          childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                          }
                        }
                      }
                    } 
                  }
                  
                  ... on WpPost_Acfconstructor_Const_Title {
                    fieldGroupName
                    title
                  }
                  ... on WpPost_Acfconstructor_Const_ContentTextImgImg {
                    editor
                    fieldGroupName
                    notColor1
                    foto1 {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                    notColor2
                    foto2 {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                  }
                  ... on WpPost_Acfconstructor_Const_Collaps {
                    fieldGroupName
                    collapsListLeft {
                      title 
                      list {
                        subTitle
                        editor
                      }
                    }
                  }
                  ... on WpPost_Acfconstructor_Const_ContentImgTitleText {
                    editor
                    fieldGroupName
                    notColor
                    title
                    foto {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                  }
                  
                  ... on WpPost_Acfconstructor_Const_Content {
                    editor
                    fieldGroupName 
                    vertical
                    reverse
                    notColor
                    foto {
                      localFile { 
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                  } 
                  
                  
                  ... on WpPost_Acfconstructor_Const_Contactdata {
                    fieldGroupName
                    title
                    image {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                    contacts { 
                      value
                      typ
                      title
                      name
                    }
                  } 
                  
                  
                  ... on WpPost_Acfconstructor_Const_Contactform {
                    fieldGroupName
                    listTabForm { 
                        title
                        form {
                          name 
                          required
                          type
                          label
                          cols 
                        }  
                        image {
                          localFile {
                            publicURL
                            childImageSharp {
                              gatsbyImageData(
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
            }
          } 
        
          page:allWpPage {
            nodes {
              slug
              title
              content
              isFrontPage
              template { 
                templateName
              }
              ACFconstructor {
                const {
                    
                  ... on WpPage_Acfconstructor_Const_Editor {
                      fieldGroupName
                      text
                  } 
                
                  ... on WpPage_Acfconstructor_Const_Banner {
                    fieldGroupName
                    title
                    banner {
                      localFile {
                        publicURL
                        childImageSharp {
                          gatsbyImageData( 
                            width: 1920
                            placeholder: BLURRED
                            formats: [AUTO, WEBP]
                          )
                        }
                      }
                    }
                    bannerMobile {
                      localFile {
                        publicURL
                        childImageSharp {
                          gatsbyImageData( 
                            placeholder: BLURRED
                            formats: [AUTO, WEBP]
                          ) 
                        }
                      }
                    }
                  }
                  
                  ... on WpPage_Acfconstructor_Const_Collections {
                    blockTitle
                    fieldGroupName
                    collection {
                      title
                      text
                      img1 {
                        localFile {
                          publicURL
                          childImageSharp { 
                              gatsbyImageData( 
                                width: 425
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                            }
                        }
                      }
                      img2 {
                        localFile {
                          publicURL
                          childImageSharp {
                              gatsbyImageData(
                                width: 960
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                          }
                        }
                      }
                      collectionUrl
                    }
                  }
                  
                  ... on WpPage_Acfconstructor_Const_Videovoutube {
                    blockTitle
                    fieldGroupName
                    video
                  }
                   
                  ... on WpPage_Acfconstructor_Const_Instagram {
                    blockTitle0
                    blockTitle1
                    blockTitle2
                    blockTitle3
                    channelname
                    channelurl
                    fieldGroupName 
                    image1 {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                width: 500
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                    image2 {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                width: 640
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                  } 
                   
                  ... on WpPage_Acfconstructor_Const_Slider {
                    fieldGroupName
                    blocktitle 
                    sliders {
                      fotoSlider {
                        localFile {
                          publicURL
                          childImageSharp {
                              gatsbyImageData(
                                width: 1920
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                          }
                        }
                      }
                      fotoSliderMob {
                        localFile {
                          publicURL
                          childImageSharp {
                              gatsbyImageData(
                                width: 600
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                          }
                        }
                      }
                    } 
                  }
                  
                  ... on WpPage_Acfconstructor_Const_Title {
                    fieldGroupName
                    title
                  }
                  ... on WpPage_Acfconstructor_Const_ContentTextImgImg {
                    editor
                    fieldGroupName
                    notColor1 
                    foto1 {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                    notColor2
                    foto2 {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                  }
                  ... on WpPage_Acfconstructor_Const_Collaps {
                    fieldGroupName
                    collapsListLeft {
                      title 
                      list {
                        subTitle
                        editor
                      }
                    }
                  }
                  ... on WpPage_Acfconstructor_Const_ContentImgTitleText {
                    editor
                    fieldGroupName
                    notColor
                    title
                    foto {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                  }
                  
                  ... on WpPage_Acfconstructor_Const_Content {
                    editor
                    fieldGroupName 
                    vertical
                    reverse
                    notColor
                    foto {
                      localFile { 
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                  } 
                  
                  
                  ... on WpPage_Acfconstructor_Const_Contactdata {
                    fieldGroupName
                    title
                    image {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                    contacts { 
                      value
                      typ
                      title
                      name
                    }
                  } 
                  
                  
                  ... on WpPage_Acfconstructor_Const_Contactform {
                    fieldGroupName
                    listTabForm { 
                        title
                        form {
                          name 
                          required
                          type
                          label
                          cols 
                        }  
                        image {
                          localFile {
                            publicURL
                            childImageSharp {
                                  gatsbyImageData(
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
            }
          } 
          
          allWpProductCategory {
            nodes {
              name
              id
              OrderSortCategory {
                filterSort
              }
              wpChildren {
                nodes {
                  name
                  id
                  uri
                  OrderSortCategory {
                    filterSort
                  }
                  ACFcategory {
                    typ
                    subtitle
                    edit
                    banner {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                    bannerMobile {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                    bannerOpenCategory {
                      localFile {
                        publicURL
                        childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                        }
                      }
                    }
                  } 
                }
              }
              uri
              products {
                nodes {
                  title
                  uri
                  featuredImage {
                    node {
                      uri
                      localFile {
                        publicURL
                        childImageSharp {
                          gatsbyImageData( 
                            width: 630
                            placeholder: BLURRED
                            formats: [AUTO, WEBP]
                          ) 
                        }
                      }
                    }
                  }
                }
              }
              ACFcategory {
                typ
                subtitle
                edit
                banner {
                  localFile {
                    publicURL
                    childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                    }
                  }
                }
                bannerMobile {
                  localFile {
                    publicURL
                    childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                    }
                  }
                }
                bannerOpenCategory {
                  localFile {
                    publicURL
                    childImageSharp {
                              gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                              )
                    }
                  }
                }
              }
            }
          }
            
            
          allWpProduct {
           edges {
              next {
                uri
                title
              }
              previous {
                uri
                title
              }
              node {
                  uri
                  id 
                  databaseId
                  ACF_product_attribute_variable {
                    color
                    size
                    priceFront
                    priceSaleFront
                  }
                  ACFBox {
                      article
                      listVideo {  
                        video
                        numberStep
                        shorts
                      }
                      like { 
                        ... on WpProduct {
                          uri
                          title
                          featuredImage {
                            node {
                              localFile {
                                publicURL
                                childImageSharp {
                                   gatsbyImageData(
                                      placeholder: BLURRED
                                      formats: [AUTO, WEBP]
                                   )
                                }
                              }
                            }
                          }
                        }
                      }
                      gallery {
                        localFile {
                            publicURL
                            childImageSharp {
                                  gatsbyImageData(
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP]
                                  )
                            }
                          } 
                      }
                      specifications {
                          title
                          list {
                            item 
                          }
                        }
                  }
                  featuredImage {
                    node {
                      localFile {
                        publicURL
                        childImageSharp {
                                  gatsbyImageData(
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP]
                                  )
                        } 
                      }
                    }
                  }
                  title
                  content
              } 
            }
           
          }
          
        } 
    `).then(results => {
        if (results.error) {
            throw  results.errors;
        }
        //const  { posts, categories } = results.data;
        // console.log('posts >>', posts.nodes)
        //console.log('categories >>', categories.nodes)


        // 1. cread pages do post
        // posts.nodes.forEach((post, index) => {
        //     const  previous = index === posts.nodes.length - 1 ? null : posts.nodes[index + 1];
        //     const  next = index === 0 ? null : posts.nodes[index - 1];
        //
        //     createPage({
        //         path: `${post.slug.current}`,
        //         component: postTemplate,
        //         context: {
        //             slug: post.slug.current,
        //             previous,
        //             next,
        //         }
        //     })
        // });

        // 2. home page
        //createFrontPage( createPage )


        // categoty  categoryTemplate


        results.data.page.nodes.forEach(item => {

            //console.log('page >>>', item.template.templateName );

            if ( item.isFrontPage === true ) {

                createPage({
                    path: '/',
                    component:  pageTemplate,
                    context: item,
                })

            } else {

                if ( item.template.templateName === 'Page Blog') {
                    createPage({
                        path: '/blog/',
                        component:  blogTemplate,
                        context: item,
                    })
                } else {

                    if ( item.template.templateName === 'Page Checkout') { } else {
                        createPage({
                            path: `${item.slug}`,
                            component:  pageTemplate,
                            context: item,
                        })
                    }

                }
            }

        })


        results.data.allWpPost.nodes.forEach(item => {

            createPage({
                path: `/blog/${item.slug}`,
                component:  postTemplate,
                context: item,
            })

        });

        // results.data.allWpPost.nodes.forEach((post, index) => {
        //     const  previous = index === posts.nodes.length - 1 ? null : posts.nodes[index + 1];
        //     const  next = index === 0 ? null : posts.nodes[index - 1];
        //
        //     createPage({
        //         path: `/blog/${post.slug.current}`,
        //         component: postTemplate,
        //         context: {
        //             slug: post.slug.current,
        //             previous,
        //             next,
        //         }
        //     })
        // });
        //
        // createBlogPage( createPage, results.data.allWpPost )


        results.data.allWpProductCategory.nodes.forEach(category => {

            createPage({
                path: category.uri,
                component: categoryProductTemplate,
                context: category,
            })

        });

        results.data.allWpProduct.edges.forEach(item => {
            createPage({
                path: item.node.uri,
                component: productTemplate,
                context: item,
            })
        });




    });
};

//
// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions
//     const result = graphql(`
//     {
//       page:allWpPage {
//         nodes {
//           slug
//           title
//           content
//           isFrontPage
//           template {
//             templateName
//           }
//         }
//       }
//     }
//   `);
//
//     //console.log('>>>>>>>>>>>>>>>>>>>>>', result);
//
//     //const { allWpPage } = result.data;
//
//     const frontTemplate = path.resolve('./src/templates/FrontPage.js');
//     const pageTemplate = path.resolve(`./src/templates/page.js`)
//
//
//     result.data.allWpPage.nodes.forEach(item => {
//
//         console.log('>>>', item);
//
//         if ( item.isFrontPage === 'true' ) {
//
//             pathUrl = `/${item.slug}`;
//             createPage({
//                 path: '/',
//                 component:  frontTemplate,
//                 context: item.content,
//             })
//
//         } else {
//
//             createPage({
//                 path: `${item.slug}`,
//                 component:  pageTemplate,
//                 context: item.content,
//             })
//
//         }
//
//     })
//
//
    // allWpProduct.edges.forEach(edge => {
    //     createPage({
    //         path: `/shop/${edge.node.productCategories.slug}/${edge.node.slug}`,
    //         component: slash(path.resolve(`./src/templates/product.js`)),
    //         context: edge.node,
    //     })
    //
    // })
//
//     // allWpProductCategory.edges.forEach(edge => {
//     //     createPage({
//     //         path: `/product-category/${edge.node.slug}`,
//     //         component: slash(path.resolve(`./src/templates/category-product.js`)),
//     //         context: edge.node,
//     //     })
//     // })
//
//
// }



