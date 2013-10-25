// ==UserScript==
// @name TechCrunch - Stay Focussed
// @namespace  http://saiprasad.me/
// @description Unfocusses clutter on TechCrunch and helps on focussing on content that matter
// @version 0.2
// @match http://techcrunch.com/*
// @match https://techcrunch.com/*
// ==/UserScript==

/*global window, document*/
(function () {
    "use strict";

    var CLASS_CONTENT = "__focussed_content",
        CLASS_GARBAGE = "__focussed_unfocus",
        ID_STYLE = "__focussed";

    // main article container
    var article = document.querySelector("div[role=main]");
    if (article) {
        article.classList.add(CLASS_CONTENT);

        var node = article,
            parent = node.parentNode;

        while (node && parent && parent.children) {
            var children = parent.children;
            for (var i = 0, l = children.length; i < l; i++) {
                var child = children.item(i);
                if (child !== node) {
                    child.classList.add(CLASS_GARBAGE);
                }
            }
            node = parent;
            parent = parent.parentNode;
        }
    }

    // Garbage inside the article
    var garbage = document.querySelectorAll("footer, .feature-island-container, .l-sidebar, .social-cluster, .social-share, aside, .article-extra");
    for (var i = 0, l = garbage.length; i < l; i++) {
        var child = garbage.item(i);
        child.classList.add(CLASS_GARBAGE);
    }

    // Add stylesheet..
    var sheet = document.createElement("style");
    sheet.type = "text/css";
    sheet.id = ID_STYLE;
    sheet.innerHTML = "@media screen {." + CLASS_GARBAGE + " {opacity: 0.25; }}";

    (document.head || document.documentElement).appendChild(sheet);

    // Listen for toggling keyboard shortcut (Shift + ~)
    window.addEventListener("keypress", function (event) {
        if (event.shiftKey && event.keyCode === 126) {
            var style_node = document.getElementById(ID_STYLE);
            if (style_node) {
                style_node.disabled = !style_node.disabled;
            }
        }
    }, false);

}());

