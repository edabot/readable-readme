var state = {};

chrome.storage.sync.get('state', function(items) {
  state = items['state'];

  if (state['fontSize'] === "normal") {
    chrome.tabs.insertCSS(null, {file: 'styles/16px_font.css'}, function() {
    });
  };

  if (state['fontSize'] === "huge") {
    chrome.tabs.insertCSS(null, {file: 'styles/21px_font.css'}, function() {
    });
  };

  if (state['fontStyle'] === "serif") {
    chrome.tabs.insertCSS(null, {file: 'styles/serif.css'}, function() {
    });
  };

  if (state['align'] === "center") {
    chrome.tabs.insertCSS(null, {file: 'styles/center.css'}, function() {
    });
  };

  if (state['mode'] === "night") {
    chrome.tabs.insertCSS(null, {file: 'styles/night_mode.css'}, function() {
    });
  };

});


document.addEventListener('DOMContentLoaded', function() {
  var checkNormalButton = document.getElementById('normal-font');
  checkNormalButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/16px_font.css'}, function() {
    });
    state['fontSize'] = 'normal';
    chrome.storage.sync.set({'state': state}, function() {
    });
  }, false);

  var checkBigFontButton = document.getElementById('bigger-font');
  checkBigFontButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/18px_font.css'}, function() {
    });
    state['fontSize'] = 'bigger';
    chrome.storage.sync.set({'state': state}, function() {
    });
  }, false);

  var checkBiggestFontButton = document.getElementById('biggest-font');
  checkBiggestFontButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/21px_font.css'}, function() {
    });
    state['fontSize'] = 'huge';
    chrome.storage.sync.set({'state': state}, function() {
    });
  }, false);

  var checkSansSerifButton = document.getElementById('sans-serif');
  checkSansSerifButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/sans_serif.css'}, function() {
    });
    state['fontStyle'] = 'sans-serif';
    chrome.storage.sync.set({'state': state}, function() {
    });
  }, false);

  var checkSerifButton = document.getElementById('serif');
  checkSerifButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/serif.css'}, function() {
    });
    state['fontStyle'] = 'serif';
    chrome.storage.sync.set({'state': state}, function() {
    });
  }, false);

  var checkLeftAlignButton = document.getElementById('left-align');
  checkLeftAlignButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/left_align.css'}, function() {
    });
    state['align'] = 'left';
    chrome.storage.sync.set({'state': state}, function() {
    });
  }, false);

  var checkCenterButton = document.getElementById('center');
  checkCenterButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/center.css'}, function() {
    });
    state['align'] = 'center';
    chrome.storage.sync.set({'state': state}, function() {
    });
  }, false);

  var checkDayModeButton = document.getElementById('day-mode');
  checkDayModeButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/day_mode.css'}, function() {
    });
    state['mode'] = 'day';
    chrome.storage.sync.set({'state': state}, function() {
    });
  }, false);

  var checkNightModeButton = document.getElementById('night-mode');
  checkNightModeButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/night_mode.css'}, function() {
    });
    state['mode'] = 'night';
    chrome.storage.sync.set({'state': state}, function() {
    });
  }, false);

  var checkNonFadingButton = document.getElementById('non-fading');
  checkNonFadingButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/non_fading.css'}, function() {
    });
    state['fading'] = 'non-fading';
    chrome.storage.sync.set({'state': state}, function() {
    });
  }, false);

  var checkFadingButton = document.getElementById('fading');
  checkFadingButton.addEventListener('click', function() {
    chrome.tabs.insertCSS(null, {file: 'styles/fading.css'}, function() {
    });
    state['fading'] = 'fading';
    chrome.storage.sync.set({'state': state}, function() {
    });
  }, false);

}, false);
