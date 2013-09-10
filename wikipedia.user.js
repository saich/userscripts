// ==UserScript==
// @name Wikipedia - Stay Focussed
// @namespace  http://saiprasad.me/
// @version 0.1
// @description Unfocusses clutter on Wikipedia and helps on focussing on content that matter
// @match http://en.wikipedia.org/*
// @match https://en.wikipedia.org/*
// ==/UserScript==

/*global window, document*/
(function () {
    "use strict";

    var CLASS_CONTENT = "__focussed_content",
        CLASS_GARBAGE = "__focussed_unfocus",
        ID_STYLE = "__focussed";

    // main article container
    var article = document.querySelector("#content");
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
    var garbage = document.querySelectorAll(".noprint,.editsection,.navbox,.metadata,.articleFeedback,.catlinks, #siteNotice, .mw-editsection");
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

