// ==UserScript==
// @name         Linkedin Feed sort by Recent
// @namespace    linkedinfeedsortbyrecent
// @version      2020.11.11 (1.4)
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
  const cookie = 'feed-sort=chronFeed; domain=www.linkedin.com; path=/; expires=Tue, 1 Jan 2030 00:00:00 GMT';
  document.cookie = cookie;
})();
