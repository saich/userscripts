// ==UserScript==
// @name Dr.Dobb's Article Limit Remover
// @description Removes the 2 article limit on Dr.Dobb's
// @match http://www.drdobbs.com/*
// @match https://www.drdobbs.com/*
// ==/UserScript==

!function() {
	var t = new Date();
	t.setDate(t.getDate() - 1); // yesterday..
	document.cookie = [
		"drdobbs_content_gating=",
		"expires="+t.toUTCString(),
		"path=/"
	].join("; ");
}();