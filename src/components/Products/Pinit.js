import React, {useState } from "react"
import {Script, ScriptStrategy} from "gatsby";

function MyPage() {
    const [loaded, setLoaded] = useState(false)
    return (
        // <>
        //     <Script src="https://assets.pinterest.com/js/pinit.js" onLoad={() => setLoaded(true)} />
        //     {loaded && <Script src="https://assets.pinterest.com/js/pinit.js" />}
        // </>
        <Script
            id="pinit"
            src="https://assets.pinterest.com/js/pinit.js"
            strategy={ScriptStrategy.postHydrate}
            forward={[`dataLayer.push`]}
            onLoad={() => console.log("success")}
            onError={() => console.log("sadness")}
        />
    )
}

export default MyPage