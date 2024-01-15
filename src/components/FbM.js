import React, { useEffect } from "react";

function MessengerChat() {
    useEffect(() => {
        // window.fbAsyncInit = function () {
        //     window.FB.init({
        //         xfbml: true,
        //         version: "v17.0",
        //     });
        // };
        // (function (d, s, id) {
        //     var js,
        //         fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) return;
        //     js = d.createElement(s);
        //     js.id = id;
        //     js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        //     fjs.parentNode.insertBefore(js, fjs);
        // })(document, "script", "facebook-jssdk");
    });
    return (
        <>
            // <div id="fb-root" />
            // <div
            //     className="fb-customerchat"
            //     attribution="page_inbox"
            //     page_id="497817423746164"
            // />
        </>
    );
}

export default MessengerChat;
