// ==UserScript==
// @name       OnlineSBH Paste Login Password
// @namespace  http://saiprasad.me/
// @version    0.1
// @description  Small utility to enable pasting the login password on Online SBH site.
// @match      https://www.onlinesbh.com/retail/sbhlogin.htm
// ==/UserScript==

(function () {
    var el = document.forms[0].password;
    if (el) {
        el.onfocus = function() {};
        el.onblur = function() {};
        el.onpaste = function () {return true;}
        el.onkeypress = el.onkeydown = function() {};
    }
})();