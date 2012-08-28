// ==UserScript==
// @name eStocksDaily's Popup Remover
// @description Removes the modal registration popup on http://estocksdaily.com
// @match http://estocksdaily.com/*
// @match https://estocksdaily.com/*
// ==/UserScript==

!function() {
	var dialog = document.getElementById("fancybox-wrap");
	var overlay = document.getElementById("fancybox-overlay");
	if(dialog) dialog.parentNode.removeChild(dialog);
	if(overlay) overlay.parentNode.removeChild(overlay);
}();
