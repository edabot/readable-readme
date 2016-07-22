var defaultState = {
  'fontSize': 'bigger',
  'fontStyle': 'sans-serif',
  'align': 'left',
  'mode': 'day',
  'fading': 'non-fading'
};

chrome.storage.sync.get('state', function(items) {
  if (items['state'] === undefined) {
    chrome.storage.sync.set({'state': defaultState}, function() {
      alert("reset");
    })
  }
});
