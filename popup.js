document.addEventListener('DOMContentLoaded', function() {
  var checkNormalButton = document.getElementById('normal-font');
  checkNormalButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/16px_font.css'}, function() {
    });
  }, false);

  var checkBigFontButton = document.getElementById('bigger-font');
  checkBigFontButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/18px_font.css'}, function() {
    });
  }, false);

  var checkBiggestFontButton = document.getElementById('biggest-font');
  checkBiggestFontButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/21px_font.css'}, function() {
    });
  }, false);

  var checkSansSerifButton = document.getElementById('sans-serif');
  checkSansSerifButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/sans_serif.css'}, function() {
    });
  }, false);

  var checkSerifButton = document.getElementById('serif');
  checkSerifButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/serif.css'}, function() {
        console.log('Its loaded!');
    });
  }, false);

  var checkLeftAlignButton = document.getElementById('left-align');
  checkLeftAlignButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/left_align.css'}, function() {
        console.log('Its loaded!');
    });
  }, false);

  var checkCenterButton = document.getElementById('center');
  checkCenterButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/center.css'}, function() {
    });
  }, false);

  var checkDayModeButton = document.getElementById('day-mode');
  checkDayModeButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/day_mode.css'}, function() {
    });
  }, false);

  var checkNightModeButton = document.getElementById('night-mode');
  checkNightModeButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/night_mode.css'}, function() {
    });
  }, false);

}, false);
