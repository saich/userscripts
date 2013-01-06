// ==UserScript==
// @name WhatsOnIndia's Popup Remover
// @description Removes the modal registration popup on http://www.whatsonindia.com/
// @match http://www.whatsonindia.com/*
// @match http://www.whatsonindia.com/*
// ==/UserScript==

!function () {
    "use strict";

	var dialog = document.getElementById("ctl00_MainContent_cContent_cContent_SetDisplayStatus");
	var overlay = document.getElementById("ctl00_MainContent_cContent_cContent_ModalPopupExtender1_backgroundElement");
	if(dialog) dialog.parentNode.removeChild(dialog);
	if(overlay) overlay.parentNode.removeChild(overlay);
}();
