/*
jshint esversion: 10
 */

let changeColor = document.querySelector('.b-change-color');

changeColor.addEventListener('click', function () {
  let color = this.value;
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        code: 'document.body.style.backgroundColor = "' + color + '"',
      }
    );
  });
});

chrome.storage.sync.get('color', function (data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.value = data.color;
});
