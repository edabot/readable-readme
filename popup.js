document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('center');
  checkPageButton.addEventListener('click', function() {
    console.log("clicked3!");
    chrome.tabs.executeScript({
       code: 'document.body.style.backgroundColor="red", document.body.style.color="red"'
     });
  }, false);
}, false);
