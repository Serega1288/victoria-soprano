const React = require("react");
const TidioScript = require("./src/components/footer/TidioScript").default;
// const FbM = require("./src/components/FbM").default;
// const TidioScript = require("./src/components/footer/TidioScript").default;
const GlobalFonts = require("./src/styles/GlobalFonts").default;


exports.wrapRootElement = ({ element }) => {
    // return <Layout {...props}>{element}</Layout>
    return (
        <>
            <TidioScript />
            {/*<FbM />*/}
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
