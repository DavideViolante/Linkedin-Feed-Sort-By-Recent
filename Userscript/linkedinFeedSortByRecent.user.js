// ==UserScript==
// @name            Linkedin Feed sort by Recent
// @description     Automatically set Sort by Recent on Linkedin feed.
// @icon            https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca
// @version         2020.04.11 (1.0)
// @namespace       linkedinfeedsortbyrecent
// @author          https://github.com/DavideViolante/
// @downloadURL     https://github.com/DavideViolante/Linkedin-Feed-Sort-By-Recent/raw/master/linkedinFeedSortByRecent.user.js
// @grant           none
// @include         http*://*.linkedin.com/*
// ==/UserScript==

(function () {
  document.cookie = 'UpdateFinder=chronFeed; domain=linkedin.com; path=/';
  const topOrRecentElem = document.querySelector('.mh1');
  if (topOrRecentElem && topOrRecentElem.textContent.trim() === 'Top') {
    const recentDropdownItem = document.getElementById('ember61');
    recentDropdownItem.click();
  }
})();
