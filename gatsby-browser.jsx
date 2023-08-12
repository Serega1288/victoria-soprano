const React = require("react");
const FbM = require("./src/components/FbM").default;
const GlobalFonts = require("./src/styles/GlobalFonts").default;

exports.wrapRootElement = ({ element }) => {
    // return <Layout {...props}>{element}</Layout>
    return (
        <>
            <FbM />
            <GlobalFonts />
            {element}
        </>
    )
}



// const React = require("react");
// const { ApolloProvider } = require("@apollo/client");
// const client = require("./src/apollo/client");
// const GlobalFonts = require("./src/styles/GlobalFonts").default;
//
// exports.wrapRootElement = ({ element }) => {
//     // return <Layout {...props}>{element}</Layout>
//     return (
//         <ApolloProvider client={client}>
//             <GlobalFonts />
//             {element}
//         </ApolloProvider>
//     )
// }