// ==UserScript==
// @name            Linkedin Feed sort by Recent
// @description     Automatically set Sort by Recent on Linkedin feed.
// @icon            https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca
// @version         2020.04.20 (1.1)
// @namespace       linkedinfeedsortbyrecent
// @author          https://github.com/DavideViolante/
// @downloadURL     https://github.com/DavideViolante/Linkedin-Feed-Sort-By-Recent/raw/master/Userscript/linkedinFeedSortByRecent.user.js
// @grant           none
// @include         http*://*.linkedin.com/*
// ==/UserScript==

(function () {
  document.cookie = 'UpdateFinder=chronFeed; domain=www.linkedin.com; path=/';
  const topOrRecentElem = document.querySelector('.mh1');
  if (topOrRecentElem && topOrRecentElem.textContent.trim() === 'Top') {
    // Open the dropdown menu
    topOrRecentElem.click();
    // Click Recent from the dropdown menu
    document.querySelectorAll('.mv1')[1].click();
  }
})();
