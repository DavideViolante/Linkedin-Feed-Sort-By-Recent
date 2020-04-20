// Name:            Linkedin Feed sort by Recent
// Description:     Automatically set Sort by Recent on Linkedin feed.
// Author:          Davide Violante - https://github.com/DavideViolante/		
// DownloadURL:     https://github.com/DavideViolante/Linkedin-Feed-Sort-By-Recent/		

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
