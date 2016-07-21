var markdown = document.getElementsByClassName('markdown-body');
var paragraphs = markdown[0].getElementsByTagName('p');
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("click", function() {
    this.classList.toggle("faded");
  });
}

console.log('checklist.js loaded');
