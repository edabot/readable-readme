var markdown = document.getElementsByClassName('markdown-body');
var paragraphs = markdown[0].getElementsByTagName('p');
var listItems = markdown[0].getElementsByTagName('li');

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("click", function() {
    this.classList.toggle("faded");
  });
  paragraphs[i].addEventListener("dragend", function() {
    this.classList.toggle("faded");
    console.log("dragged");
  });
}
for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function() {
    this.classList.toggle("faded");
  });
}

console.log('checklist.js loaded');
