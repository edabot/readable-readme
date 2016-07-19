var blackcss = 'document.body.style.backgroundColor="black", document.body.style.color="black"'
var redcss = 'document.body.style.backgroundColor="red", document.body.style.color="red"'
var testcss = 'article.style.color="red"'

document.addEventListener('DOMContentLoaded', function() {
  var checkNormalButton = document.getElementById('normal-font');
  checkNormalButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/16px_font.css'}, function() {
        console.log('Its loaded!');
    });
  }, false);

  var checkBigFontButton = document.getElementById('bigger-font');
  checkBigFontButton.addEventListener('click', function() {
    console.log("clicked black");
    chrome.tabs.insertCSS(null, {file: 'styles/18px_font.css'}, function() {
        console.log('Its loaded!');
    });
  }, false);

  var checkBiggestFontButton = document.getElementById('biggest-font');
  checkBiggestFontButton.addEventListener('click', function() {
    console.log("clicked black");
    chrome.tabs.insertCSS(null, {file: 'styles/21px_font.css'}, function() {
        console.log('Its loaded!');
    });
  }, false);

  var checkLeftAlignButton = document.getElementById('left-align');
  checkLeftAlignButton.addEventListener('click', function() {
    console.log("clicked center");
    chrome.tabs.insertCSS(null, {file: 'styles/left_align.css'}, function() {
        console.log('Its loaded!');
    });
  }, false);

  var checkCenterButton = document.getElementById('center');
  checkCenterButton.addEventListener('click', function() {
    console.log("clicked center");
    chrome.tabs.insertCSS(null, {file: 'styles/center.css'}, function() {
        console.log('Its loaded!');
    });
  }, false);

}, false);
