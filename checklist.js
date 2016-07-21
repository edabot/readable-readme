var markdown = document.getElementsByClassName('markdown-body');
var paragraphs = markdown[0].getElementsByTagName('p');
var listItems = markdown[0].getElementsByTagName('li');

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("click", function() {
    this.classList.toggle("faded");
  });
  if (paragraphs[i].innerHTML.includes("img src")) {
    paragraphs[i].classList.toggle("image-container");
  }
}

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function() {
    this.classList.toggle("faded");
  });
}

console.log('checklist.js loaded');
