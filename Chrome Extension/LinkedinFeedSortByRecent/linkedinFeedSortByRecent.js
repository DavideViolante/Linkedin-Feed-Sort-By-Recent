// Name:            Linkedin Feed sort by Recent
// Description:     Automatically set Sort by Recent on Linkedin feed.
// Author:          Davide Violante - https://github.com/DavideViolante/		
// DownloadURL:     https://github.com/DavideViolante/Linkedin-Feed-Sort-By-Recent/		


(function () {
  document.cookie = 'UpdateFinder=chronFeed; domain=linkedin.com; path=/';
  const topOrRecentElem = document.querySelector('.mh1');
  if (topOrRecentElem && topOrRecentElem.textContent.trim() === 'Top') {
    const recentDropdownItem = document.getElementById('ember61');
    recentDropdownItem.click();
  }
})();
