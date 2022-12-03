//import React from "react";
//import 'lazysizes';
// export const onClientEntry = () => {
//     // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//     if (!(`IntersectionObserver` in window)) {
//         import(`lazysizes`)
//         console.log(`# lazysizes is polyfilled!`)
//     }
// }

// const addScript = url => {
//     const script = document.createElement("script")
//     script.src = url
//     script.async = true
//     document.body.appendChild(script)
// }
//
// export const onClientEntry = () => {
//     window.onload = () => {
//         addScript("https://assets.pinterest.com/js/pinit.js")
//     }
// }

//
// export const onRenderBody = ({ setHeadComponents }) => {
//     setHeadComponents([
//         <script src="https://assets.pinterest.com/js/pinit.js" />
//     ])
// }


// ES5 way
// exports.onClientEntry = () => {
// ES6 way
// export const onClientEntry = () => {
//     // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//     if (!(`IntersectionObserver` in window)) {
//         import(`intersection-observer`)
//         console.log(`# IntersectionObserver is polyfilled!`)
//     }
// }