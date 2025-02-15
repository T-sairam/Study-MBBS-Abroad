// analytics/facebook-pixel.js

(function () {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    window.fbq = window.fbq || function () {
        (window.fbq.q = window.fbq.q || []).push(arguments);
    };

    fbq("init", "my_PIXEL_ID_HERE");
    fbq("track", "PageView");
})();
