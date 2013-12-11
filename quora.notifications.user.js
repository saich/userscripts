// ==UserScript==
// @name       Unread only Quora Notifications
// @namespace  http://saiprasad.me/
// @version    0.1
// @description  Hides the read items in Quora's notifications page. Can be toggled with Shift + ~.
// @match      https://www.quora.com/notifications
// @match      http://www.quora.com/notifications
// ==/UserScript==

/*global window, document*/
(function () {
    "use strict";

    var ID_STYLE = "__focussed";

    // Add stylesheet..
    var sheet = document.createElement("style");
    sheet.type = "text/css";
    sheet.id = ID_STYLE;
    sheet.innerHTML = "@media screen {.notification_item.seen {display:none; }}";

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