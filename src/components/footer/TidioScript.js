import React, { useEffect } from "react";

const TidioScript = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//code.tidio.co/puoxkrgs3xfan1bzpm8wzkh090dpwiek.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up script when component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return null; // No need to render anything
};

export default TidioScript;