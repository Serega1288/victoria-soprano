import React from "react";
import { useSpring, animated } from "react-spring";

const PageTransition = ({ children }) => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
    });

    return <animated.div style={props}>{children}</animated.div>;
};

export default PageTransition;