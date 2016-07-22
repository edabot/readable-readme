var markdown = document.getElementsByClassName('markdown-body')[0];
var paragraphs = markdown.getElementsByTagName('p');
var listItems = markdown.getElementsByTagName('li');
var codeBlocks = markdown.getElementsByClassName('highlight');

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

for (var i = 0; i < codeBlocks.length; i++) {
  codeBlocks[i].addEventListener("click", function() {
    this.classList.toggle("faded");
  });
}
