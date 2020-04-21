// Name:            Linkedin Feed sort by Recent
// Description:     Automatically set Sort by Recent on Linkedin feed.
// Author:          Davide Violante - https://github.com/DavideViolante/		
// DownloadURL:     https://github.com/DavideViolante/Linkedin-Feed-Sort-By-Recent/		

(function () {
  document.cookie = 'UpdateFinder=chronFeed; domain=www.linkedin.com; path=/';
  window.addEventListener("load", onLoad, false);
  function onLoad() {
    const topOrRecentElem = document.querySelector('.mh1');
    if (topOrRecentElem && topOrRecentElem.textContent.trim() === 'Top') {
      // Open the dropdown menu
      topOrRecentElem.click();
      // Wait for animation, then click Recent
      setTimeout(() => document.querySelectorAll('.mv1')[1].click(), 500);
    }
  }
})();
