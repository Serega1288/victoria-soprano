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

const frontTemplate = path.resolve('./src/templates/FrontPage.js');
const pageTemplate = path.resolve(`./src/templates/page.js`)

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    return graphql(`
        {
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
                
                  ... on WpPage_Acfconstructor_Const_Banner {
                    fieldGroupName
                    title
                    banner {
                      localFile {
                        publicURL
                      }
                    }
                    bannerMobile {
                      localFile {
                        publicURL
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
                        }
                      }
                      img2 {
                        localFile {
                          publicURL
                        }
                      }
                      collectionUrl
                    }
                  }
                  
                  ... on WpPage_Acfconstructor_Const_Videovoutube {
                    blockTitle
                    fieldGroupName
                    video
                    videofon {
                      localFile { 
                        publicURL
                      } 
                    }
                    videofon {
                      localFile { 
                        publicURL
                      } 
                    } 
                    videofonMobile {
                      localFile { 
                        publicURL
                      } 
                    }
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
                      }
                    }
                    image2 {
                      localFile {
                        publicURL
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
                        }
                      }
                      fotoSliderMob {
                        localFile {
                          publicURL
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
                      }
                    }
                    notColor2
                    foto2 {
                      localFile {
                        publicURL
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
                    collapsListRight {
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
                      }
                    }
                  }
                  ... on WpPage_Acfconstructor_Const_Content {
                    editor
                    fieldGroupName
                    textHorizont
                    textVertical
                    revers
                    notColor
                    foto {
                      localFile {
                        publicURL
                      }
                    }
                  } 
                  
                  ... on WpPage_Acfconstructor_Const_Collaps {
                    fieldGroupName
                    collapsListLeft {
                      title
                      list {
                        editor
                        subTitle
                      }
                    }
                    collapsListRight {
                      title
                      list {
                        editor
                        subTitle
                      }
                    }
                  }
                  
                }
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

        // categories.nodes.forEach(category => {
        //
        //     createPage({
        //         path: `/categories/${category.title.toLowerCase()}`,
        //         component: categoryTemplate,
        //         context: {
        //             categoryTitle: category.title,
        //             posts,
        //         }
        //     })
        //
        // });



        results.data.page.nodes.forEach(item => {

            //console.log('>>>', item);

            if ( item.isFrontPage === true ) {

                createPage({
                    path: '/',
                    component:  pageTemplate,
                    context: item,
                })

            } else {

                createPage({
                    path: `${item.slug}`,
                    component:  pageTemplate,
                    context: item,
                })

            }

        })

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
//     // allWpProduct.edges.forEach(edge => {
//     //     createPage({
//     //         path: `/shop/${edge.node.productCategories.slug}/${edge.node.slug}`,
//     //         component: slash(path.resolve(`./src/templates/product.js`)),
//     //         context: edge.node,
//     //     })
//     //
//     // })
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
