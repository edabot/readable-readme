var defaultState = {
  'fontSize': 'bigger',
  'fontStyle': "sans-serif",
  'align': 'left',
  'mode': 'day'
};

chrome.storage.sync.get('state', function(items) {
  alert(items['state']['fontSize']);
  if (items['state']['fontSize'] === undefined) {
    chrome.storage.sync.set({'state': defaultState}, function() {
      alert("set worked");
    })
  }
});

// alert('still here');


// chrome.storage.sync.set({'state': 12}, function() {
//   alert("set worked");
//   chrome.storage.sync.get('state', function(items) {
//     alert(items['state']);
//   });
// })
