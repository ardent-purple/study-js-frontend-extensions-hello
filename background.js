/*jshint esversion: 10 */

chrome.runtime.onInstalled.addListener(function(...args) {

  chrome.storage.sync.set({
    color: '#3aa757'
  }, function() {
    console.log('Color is green');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    const rule1 = {
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          hostEquals: 'developer.chrome.com'
        },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    };
    chrome.declarativeContent.onPageChanged.addRules([rule1]);
  });

});
