var defaultState = {
  'fontSize': 'bigger',
  'fontStyle': 'sans-serif',
  'align': 'left',
  'mode': 'day',
  'fading': 'non-fading'
};

chrome.storage.sync.get('state', function(items) {
  // alert(items['state']['fontSize']);
  if (items['state']['fontSize'] === undefined) {
    chrome.storage.sync.set({'state': defaultState}, function() {
      alert("reset");
    })
  }
});


    // chrome.tabs.insertCSS(null, {file: 'styles/16px_font.css'}, function() { });
    // chrome.tabs.insertCSS(null, {file: 'styles/18px_font.css'}, function() { });
    // chrome.tabs.insertCSS(null, {file: 'styles/21px_font.css'}, function() { });
    // chrome.tabs.insertCSS(null, {file: 'styles/sans_serif.css'}, function() { });
    // chrome.tabs.insertCSS(null, {file: 'styles/serif.css'}, function() { });
    // chrome.tabs.insertCSS(null, {file: 'styles/left_align.css'}, function() { });
    // chrome.tabs.insertCSS(null, {file: 'styles/center.css'}, function() { });
    // chrome.tabs.insertCSS(null, {file: 'styles/day_mode.css'}, function() { });
    // chrome.tabs.insertCSS(null, {file: 'styles/night_mode.css'}, function() { });



// alert('still here');


// chrome.storage.sync.set({'state': 12}, function() {
//   alert("set worked");
//   chrome.storage.sync.get('state', function(items) {
//     alert(items['state']);
//   });
// })
