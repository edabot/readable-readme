document.addEventListener('DOMContentLoaded', function() {
  var markdown = document.getElementsByClassName('markdown-body');
  var paragraphs = markdown.getElementsByTagName('p');
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", function() {
     alert("you clicked");
 });
  }

}, false);

console.log('checklist.js loaded');
