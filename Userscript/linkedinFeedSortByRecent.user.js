// ==UserScript==
// @name         Linkedin Feed sort by Recent
// @namespace    linkedinfeedsortbyrecent
// @version      2020.04.25 (1.3)
// @author       Davide Violante
// @description  Automatically set Sort by Recent on Linkedin feed.
// @website      https://www.davideviolante.com
// @homepage     https://github.com/DavideViolante/Linkedin-Feed-Sort-By-Recent/
// @updateURL    https://github.com/DavideViolante/Linkedin-Feed-Sort-By-Recent/raw/master/Userscript/linkedinFeedSortByRecent.user.js
// @downloadURL  https://github.com/DavideViolante/Linkedin-Feed-Sort-By-Recent/raw/master/Userscript/linkedinFeedSortByRecent.user.js
// @supportURL   https://github.com/DavideViolante/Linkedin-Feed-Sort-By-Recent/issues
// @icon         https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca
// @match        https://*.linkedin.com/*
// @grant        none
// ==/UserScript==

(function () {
  const cookie = 'UpdateFinder=chronFeed; domain=www.linkedin.com; path=/; expires=Tue, 1 Jan 2030 00:00:00 GMT'
  document.cookie = cookie;
  window.addEventListener("load", onLoad, false);
  function onLoad() {
    const topOrRecentElem = document.querySelector('.mh1');
    if (topOrRecentElem && topOrRecentElem.textContent.trim() === 'Top') {
      // Open the dropdown menu
      topOrRecentElem.click();
      // Wait for animation, then click Recent
      setTimeout(() => {
        document.querySelectorAll('.mv1')[1].click();
        document.cookie = cookie;
      }, 500);
    }
  }
})();
